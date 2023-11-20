const markas = [
    { name: 'Hyundai', code: 1 },
    { name: 'Hyundai', code: 2 },
    { name: 'Hyundai', code: 3 },
    { name: 'Hyundai', code: 4 },
    { name: 'Hyundai', code: 5 }
];

const categories = [
    { name: 'HD', code: 6 },
    { name: 'HD', code: 7 },
    { name: 'HD', code: 8 },
    { name: 'HD', code: 9 },
    { name: 'HD', code: 10 }
];

const carStyle = [
    { name: <img src={require('./images/car.png')} className='w-[58px] m-auto' />, code: 11 },
    { name: <img src={require('./images/car.png')} className='w-[58px] m-auto' />, code: 12 },
    { name: <img src={require('./images/car.png')} className='w-[58px] m-auto' />, code: 13 },
    { name: <img src={require('./images/car.png')} className='w-[58px] m-auto' />, code: 14 },
    { name: <img src={require('./images/car.png')} className='w-[58px] m-auto' />, code: 15 }
];

const carStyleTamplate = (car) => {
    return car.name
};

export {
    markas,
    categories,
    carStyle,
    carStyleTamplate
}