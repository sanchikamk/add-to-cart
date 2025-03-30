import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const ShoppingCartModal = ({ isOpen, onAction, selectedProduct, onRemoveFromCart }) => {

  const subtotal = selectedProduct?.reduce((sum, item) => sum + (item.price * 1), 0);
  const shipping = 5.00;
  const tax = subtotal * 0.18; // Assuming 18% tax
  const orderTotal = subtotal + shipping + tax;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => onAction(false)}></div>
        </div>

        {/* Modal container */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
              <button
                onClick={() => onAction(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
              </button>
            </div>

            {/* Cart items */}
            <div className="mt-6 divide-y divide-gray-200">
              {selectedProduct?.map((item) => (
                <div key={item.id} className="py-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      {/* <p className="text-gray-500">{item.description}</p> */}
                    </div>
                    <p className="text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-1">
                        <FontAwesomeIcon icon={faCheck} className="h-4 w-4" />
                      </span>
                      <span>{1}</span>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(item)}
                      className="text-red-500 hover:text-red-700 flex items-center"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} className="h-4 w-4 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between border-t border-gray-200 pt-4">
                <span className="text-lg font-bold">Order total</span>
                <span className="text-lg font-bold">${orderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={() => onAction(false)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};