import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base">
            <td className="hidden md:block py-6 px-1">323131</td>
            <td className="py-6 px-1">12.23.3434</td>
            <td className="py-6 px-1">23.23</td>
            <td className="hidden md:block py-6 px-1">
              big burger, veggie pizza, cocal cola
            </td>
            <td className="py-6 px-1">on the way...</td>
          </tr>
          <tr className="text-sm md:text-base">
            <td className="hidden md:block py-6 px-1">323131</td>
            <td className="py-6 px-1">12.23.3434</td>
            <td className="py-6 px-1">23.23</td>
            <td className="hidden md:block py-6 px-1">
              big burger, veggie pizza, cocal cola
            </td>
            <td className="py-6 px-1">on the way...</td>
          </tr>
          <tr className="text-sm md:text-base">
            <td className="hidden md:block py-6 px-1">323131</td>
            <td className="py-6 px-1">12.23.3434</td>
            <td className="py-6 px-1">23.23</td>
            <td className="hidden md:block py-6 px-1">
              big burger, veggie pizza, cocal cola, french fries
            </td>
            <td className="py-6 px-1">on the way...</td>
          </tr>
          <tr className="text-sm md:text-base">
            <td className="hidden md:block py-6 px-1">323131</td>
            <td className="py-6 px-1">12.23.3434</td>
            <td className="py-6 px-1">23.23</td>
            <td className="hidden md:block py-6 px-1">
              big burger, veggie pizza, cocal cola
            </td>
            <td className="py-6 px-1">on the way...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
