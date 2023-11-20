import ReelsCard from "../../components/ReelsCard/ReelsCard";

const reels = [
    { name: 'select 1', code: 'NY' },
    { name: 'select 2', code: 'RM' },
    { name: 'select 3', code: 'LDN' },
    { name: 'select 4', code: 'IST' },
    { name: 'select 5', code: 'PRS' }
];

const data = [
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
    { name: "", code: "" },
];

const gridItem = (product) => {
    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-3">
            <ReelsCard />
        </div>
    )
}


export {
    reels,
    data,
    gridItem
}