import { useEffect } from "react";

const useReplacePagnitToText = () => {
    useEffect(() => {

        const perv = document.querySelector('.p-paginator-prev');
        const next = document.querySelector('.p-paginator-next');

        if (perv) {

            perv.innerHTML = "Previous";
        }

        if (next) {
            next.innerHTML = "Next";
        }

    }, []);
}

const useFetchData = (CustomerService, setCustomers, getCustomers, setLoading, initFilters) => {

    useEffect(() => {

        CustomerService.getCustomersMedium().then((data) => {

            setCustomers(getCustomers(data));

            setLoading(false);

        });

        initFilters();

    }, []);

}

export default function useCustomEffect() {
    return { useReplacePagnitToText, useFetchData }
}