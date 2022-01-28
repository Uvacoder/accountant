import { NextPage } from "next";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { InvoiceDetails } from "@/components/invoices/InvoiceDetails";
import { InvoiceInfo } from "@/components/invoices/InvoiceInfo";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { IInvoice } from "@/types/invoice";
import { useInvoices } from "@/data/invoices";

const Invoices: NextPage = () => {
  const [invoice, setInvoice] = useState<IInvoice | null>(null);
  const { data: invoices } = useInvoices();

  if (!invoices) return null;

  return (
    <div className="flex flex-1 flex-row">
      <div className="h-fit w-8/12 shrink-0 flex-col overflow-hidden rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Invoices
              </h3>
            </div>
            <div className="ml-4 mt-2 flex-shrink-0">
              <Link href="/create-invoice">
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create new invoice
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 pl-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500" />
                      <th
                        scope="col"
                        className="py-3 pl-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-6 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        Amount
                      </th>
                      <th scope="col" className="relative py-3 pl-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice, personIdx) => (
                      <InvoiceInfo
                        key={invoice.id}
                        position={personIdx}
                        onClick={(invoice) => setInvoice(invoice)}
                        {...invoice}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <nav
          className="flex items-center justify-between bg-white px-4 py-2 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">20</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            <a
              href="#"
              className="relative inline-flex rounded-full bg-white p-1 font-medium text-gray-700 hover:bg-gray-50"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex rounded-full bg-white p-1 font-medium text-gray-700 hover:bg-gray-50"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-500" />
            </a>
          </div>
        </nav>
      </div>

      <Transition
        show={!!invoice}
        className="4/12 relative flex flex-1 shrink-0"
        enter="transition-all duration-100"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <InvoiceDetails {...(invoice as IInvoice)} />
      </Transition>
    </div>
  );
};

export default Invoices;
