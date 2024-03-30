// export const color=[
//     "White",
//     "Black",
//     "Red",
//     "Marun",
//     "Beige",
//     "Pink",
//     "Green",
//     "Yellow",
// ];


export const filters=[
    {
        id:"color",
        name:"Color",
        Options:[
            {value: "white", label:"White"},
            {value: "beige", label:"Beige"},
            {value: "blue", label:"Blue"},
            {value: "brown", label:"Brown"},
            {value: "green", label:"Green"},
            {value: "purple", label:"Purple"},
            {value: "yellow", label:"Yellow"},
            {value: "black", label:"Black"},
            {value: "dark blue", label:"Dark Blue"},

        ],

    },
    {
        id:"size",
        name: "Size",

        Options:[
            {value: "S", label:"S"},
            {value: "M", label:"M"},
            {value: "L", label:"L"},
            

        ],

    },
];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        Options:[
            {value: "159-399", label:"₹159-₹399"},
            {value: "399-999", label:"₹399-₹999"},
            {value: "999-1999", label:"₹999-₹1999"},
            {value: "1999-2999", label:"₹1999-₹2999"},
            {value: "3999-4999", label:"₹3999-₹4999"},  

        ],
    },
    {
        id:"discount",
        name:"DISCOUNT RANGE",
        Options:[
            {value: "10", label:"10% And Above"},
            {value: "20", label:"20% And Above"},
            {value: "30", label:"30% And Above"},
            {value: "40", label:"40% And Above"},
            {value: "50", label:"50% And Above"},
            {value: "60", label:"60% And Above"},
            {value: "70", label:"70% And Above"},
            {value: "80", label:"80% And Above"},


        ],
    },
    {
        id:"stock",
        name:"Availability",
        Options:[
            {value: "in_stock", label:"In Stock"},
            {value: "out_of_stock", label:"Out Of Stock"},
        ],
    },

];

