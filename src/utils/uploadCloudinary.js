const upload_preset = import.meta.env.VITE_UPLOAD_PRESET

    const uploadImageToCloudinary = async file =>{
        const uploadData = new FormData()
        uploadData.append('file', file)
        uploadData.append("upload_preset", upload_preset) // 云
        uploadData.append('cloud_namae', cloud_name);

        const res = await fetch(
            'https://api.cloudinary.com/v1_1/${cloud_name}/image/upload',
            {
                method: "post",
                body:uploadData,
            }
        );
        const data = await res.json();

        return data;
    }
    export default  uploadImageToCloudinary ;
    
    
