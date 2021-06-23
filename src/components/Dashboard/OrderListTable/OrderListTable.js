import React from 'react';
const OrderListTable = ({ order, updateOrderStatus }) => {
    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary " scope="col">Name</th>
                        <th className="text-secondary " scope="col">Email</th>
                        <th className="text-secondary" scope="col">ServiceName</th>

                        <th className="text-secondary" scope="col">Paid with</th>
                        <th className="text-secondary" scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map((order, index) =>

                            <tr>
                                <td>{index + 1}</td>
                                <td className="">{order.name}</td>
                                <td className=" ">{order.email}</td>
                                <td>{order.serviceName}</td>

                                <td>Credit card</td>
                                <td>
                                    <select
                                        className={order.status === "Pending" ? "btn btn-danger" : order.status === "Done" ? "btn btn-success" : "btn btn-info"}
                                        defaultValue={order.status}
                                        onChange={e => updateOrderStatus(e.target.value, order._id)}>
                                        <option className="bg-white text-muted">Pending</option>
                                        <option className="bg-white text-muted">On going</option>
                                        <option className="bg-white text-muted">Done</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>


        </div>
    );
};

export default OrderListTable;