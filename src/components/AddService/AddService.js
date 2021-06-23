import React, { useState } from 'react';
import swal from 'sweetalert';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import SideNavBar from '../Dashboard/SideNavBar/SideNavBar';

const AddService = () => {

    const { formState: { errors } } = useForm();

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (e) => {
        const loading = toast.loading('Please wait...!');
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('cost', info.cost);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                toast.dismiss(loading);
                if (data) {
                    return swal("service Added", "service has been added successful.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
    }

    return (
        <div className="row">
            <SideNavBar></SideNavBar>
            <div className="col-md-9 mt-5">

                <div style={{ backgroundColor: "#F4FDFB", marginRight: "20px" }}>
                    <div className="shadow p-5 d-flex justify-content-center flex-column">

                        <h5 className="text-brand">Add a Service</h5>
                        <form onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1">Service Title</label>
                                    <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="First name" ></input>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1">Service Image</label>
                                    <input type="file" name="img" onChange={handleFileChange} className="form-control" placeholder="Image" ></input>
                                </div>
                            </div>
                            <div className="row mt-4 g-3">
                                <div className="col form-group">
                                    <label htmlFor="exampleInputEmail1">Service description</label>
                                    <input type="text" name="description" onBlur={handleBlur} className="form-control" placeholder="Service details"></input>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1">Service cost</label>
                                    <input type="number" onBlur={handleBlur} name="cost" className="form-control" placeholder="Cost"></input>
                                </div>

                            </div>
                            <div className="col-12 d-flex justify-content-center mt-2">
                                < button type="submit" data-bs-target="#staticBackdrop" className="btn btn-danger">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddService;