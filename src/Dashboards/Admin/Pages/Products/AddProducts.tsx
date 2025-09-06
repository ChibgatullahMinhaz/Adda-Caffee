import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface CoffeeFormData {
    name: string;
    category: string;
    description: string;
    price: number;
    sizes: string[];
    currency: string;
    inStock: boolean;
    caffeineContent: number;
    ratings: number;
    calories: number;
    tags: string[];
    image: string;
    seasonal: boolean;
    quantity: number;
    ingredients: string[];
    roastLevel: string;
    origin: string;
    available: boolean;
    isSpecial: boolean;
}
const categories = [
    "Espresso", "Americano", "Latte", "Cappuccino", "Mocha", "Macchiato",
    "Flat White", "Ristretto", "Long Black", "Cold Brew", "Iced Latte",
    "Iced Mocha", "Frappuccino", "Affogato", "Irish Coffee", "Caffè macchiato",
    "Flat white", "Cortado", "Café au lait", "Iced coffee", "Doppio", "Frappe",
    "Red Eye", "Lungo", "Coffee with cream", "Turkish coffee", "Breve",
    "Coffea arabica", "Café Cubano", "Other"
];
const AddProducts = () => {
    const { register, handleSubmit, formState:{errors} } = useForm<CoffeeFormData>({
        defaultValues: {
            name: "",
            category: "Other",
            description: "",
            price: 0,
            sizes: ["medium"],
            currency: "BDT",
            inStock: true,
            caffeineContent: 0,
            ratings: 0,
            calories: 0,
            tags: [],
            image: "",
            seasonal: false,
            quantity: 0,
            ingredients: [],
            roastLevel: "",
            origin: "",
            available: true,
            isSpecial: false
        }
    });

    const onSubmit = (data: CoffeeFormData) => {
        console.log(data);
        toast.success("Coffee added successfully!");
        // reset(); // reset form after submission
        // Here you can call your API to save the coffee
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center md:text-4xl">Add New Coffee</h2>
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className="text-xl  bg-base-200 ">

                    <div className='bg-base-200 grid grid-cols-1 sm:grid-cols-2 border-blue-500'>
                        {/* basic info */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 text-2xl">
                            <legend className="fieldset-legend">Basic Info</legend>
                            {/* name */}
                            <label htmlFor='name' className="label">Name</label>
                            <input type="text" {...register("name", { required: "Name is required" })} className="input w-full" name="name" placeholder="Enter Product Name" />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            {/* category */}
                            <div>
                                <label htmlFor="category" className="label">Category</label>
                                <select {...register("category")} className="select select-bordered w-full">
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            {/* description */}
                            <label htmlFor='description' className="label text-xl">description</label>
                            <input type="text" {...register("description", { required: "Description is required" })} className="input w-full" name="description" placeholder="Enter Product Description " />
                            {errors.description && <p className='text-red-500'> {errors.description.message}</p>}
                            {/* origin */}
                            <label htmlFor='origin' className="label text-xl">Origin</label>
                            <input type="text" {...register("origin", { required: "origin is Required" })} className="input w-full" name="origin" placeholder="Enter Product origin " />

                            <label htmlFor='ingredients' className="label text-xl">Ingredients(Comma Saparator)</label>
                            <input type="text" className="input w-full" name="description" placeholder="Enter Product ingredients with comma separator(e,g:oreng,oloer,) " />


                            <label htmlFor='roastLevel' className="label text-xl">RoastLevel</label>
                            <input type="text" className="input w-full" name="description" placeholder="Enter roastLevel " />
                        </fieldset>


                        {/* Pricing & Stock */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <legend className="fieldset-legend">Pricing & Stock</legend>

                            <label htmlFor='price' className="label">Price</label>
                            <input type="number" className="input w-full" placeholder="Enter Product Price min(0)" min={0} />

                            <label className="label" htmlFor='currency'>Currency</label>
                            <input type="text" className="input w-full" placeholder="Enter currency(e,g: BDT, INR, USD)" />

                            <label className="label" htmlFor='quantity'>Quantity</label>
                            <input type="number" className="input w-full" placeholder="Enter Product quantity in Number " />

                            <label className="label" htmlFor='sizes'>Sizes*</label>
                            <input type="text" name='sizes' className="input w-full" placeholder="Enter Product size (e,g:small, medium, large) " />

                            {/* Available */}
                            <div className="flex items-center gap-2">
                                <label htmlFor="InStock" className='label'>InStock</label>
                                <input type="checkbox" {...register("inStock")} className="checkbox" />
                            </div>
                            {/* inStock */}
                            <div className="flex items-center gap-2">
                                <label htmlFor="available" className='label'>Available: </label>
                                <input type="checkbox" {...register("available")} className="checkbox" />
                            </div>
                        </fieldset>

                    </div>
                    {/* Attributes / Features */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend">Attributes / Features</legend>

                        <label className="label" htmlFor='caffeineContent'>CaffeineContent</label>
                        <input type="text" className="input w-full" placeholder="Enter caffeineContent" />


                        <div className="flex items-center gap-2">
                            <label htmlFor="Seasonal" className='label'>Seasonal: </label>
                            <input type="checkbox" {...register("seasonal")} className="checkbox" />
                        </div>


                        {/* isSpecial */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="isSpecial" className='label'>isSpecial: </label>
                            <input type="checkbox" {...register("isSpecial")} className="checkbox" />

                        </div>
                    </fieldset>

                    {/* Nutritional Info */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend">Page details</legend>

                        <label className="label" htmlFor='calories'>Calories</label>
                        <input type="number" className="input w-full" placeholder="calories in number" />

                    </fieldset>


                    {/* Media & Tags */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend">Media & Tags</legend>

                        <label className="label" htmlFor='tags'>Tags(comma Separator)</label>
                        <input type="text" className="input w-full" placeholder="Enter tags(e,g:coffee, blackCoffee)" />

                        <label className="label" htmlFor='imageUpload'>Upload Image: </label>
                        <input type="file" className="input w-full" placeholder="Select image form your computer" />

                    </fieldset>
                    {/* Submit Button */}
                </div>
                <div>
                    <button type="submit" className="btn btn-primary w-full ">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;
