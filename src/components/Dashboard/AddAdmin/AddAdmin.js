import React, { useState } from 'react';
import swal from 'sweetalert';
import SideNavBar from '../SideNavBar/SideNavBar';
import toast from 'react-hot-toast';

const AddAdmin = () => {
    const [admin, setAdmin] = useState(null)
    
    const handleAdmin = (e) => {
        e.preventDefault()
        const loading = toast.loading('Please wait...!');
        fetch("https://smart-solution-server.herokuapp.com/addAdmin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify({ "email": admin })
        })
            .then(res => res.json())
            .then(data => {
                toast.dismiss(loading);
                if (data) {
                    return swal("Admin Added", "Admin has been added successful.", "success");
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
                <div>
                    <form style={{ backgroundColor: "#F4FDFB" }} onSubmit={handleAdmin} className="w-75 p-5 shadow">
                        <div className="row mb-3">
                            <label for="inputEmail3" name="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" name="email" onBlur={(e) => setAdmin(e.target.value)} className="form-control" id="inputEmail3"></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;