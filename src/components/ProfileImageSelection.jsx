import {useRef, useState} from "react";
import {Trash, Upload, User} from "lucide-react";

const ProfileImageSelection = ({image,setImage}) => {

    const inputRef = useRef(null);
    const [preview, setPreview] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file){
            setImage(file);

            const preview = URL.createObjectURL(file);
            setPreview(preview);

        }

    }

    const handleRemoveImage = (e) =>{
        e.preventDefault();
        setPreview(null);

        setImage(null);
    }

    const onChooseFile = (e) => {
        // to open file explorer
        e.preventDefault();

        inputRef.current?.click();
    };


    return (

        <div className="flex justify-center mb-6">
            <input type="file" accept={image} ref={inputRef} onChange={e => handleImageChange(e)} className="hidden"/>
            {!image ? (
                <div className="w-20 h-20 flex items-center justify-center bg-slate-400 rounded-full relative">
                    <User className=" text-slate-500 " size="30"/>
                    <button
                        onClick={ (e)=> onChooseFile(e)}
                        className="w-8 h-8 flex items-center justify-center bg-primary test-white rounded-full absolute -bottom-1 -right-1">
                        <Upload size={15} className="text-slate-500"/>
                    </button>
                </div>
            ) : <div className="relative">
                <img src={preview} alt="Profile Image" className="w-20 h-20 rounded-full object-cover"/>
                <button
                    className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1">
                    <Trash onClick={(e) => handleRemoveImage(e)}/>
                </button>
            </div>}
        </div>

    );
}

export default ProfileImageSelection;