import { useForm } from "react-hook-form";
import type { CoffeeFormData } from "../../../../types/types";
import { addCoffee } from "../../../../api/addCoffee";



const categories = [
    "Espresso", "Americano", "Latte", "Cappuccino", "Mocha", "Macchiato",
    "Flat White", "Ristretto", "Long Black", "Cold Brew", "Iced Latte",
    "Iced Mocha", "Frappuccino", "Affogato", "Irish Coffee", "Caffè macchiato",
    "Flat white", "Cortado", "Café au lait", "Iced coffee", "Doppio", "Frappe",
    "Red Eye", "Lungo", "Coffee with cream", "Turkish coffee", "Breve",
    "Coffea arabica", "Café Cubano", "Other"
];
const ALLOWED_SIZES = ["small", "medium", "large"];


const AddProducts: React.FunctionComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<CoffeeFormData>({
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
        // convert comma separated values into arrays
        data.tags = (data.tags as unknown as string).split(",").map(t => t.trim());
        data.ingredients = (data.ingredients as unknown as string).split(",").map(i => i.trim());
        console.log("Submitted Data:", data);
        addCoffee(data)
        reset();
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center md:text-4xl">
                Add New Coffee
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-xl bg-base-200">
                    <div className="bg-base-200 grid grid-cols-1 sm:grid-cols-2 border-blue-500">
                        {/* Basic Info */}
                        <fieldset className="fieldset border p-4">
                            <legend className="fieldset-legend">Basic Info</legend>

                            {/* name */}
                            <label className="label">Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                className="input w-full"
                                placeholder="Enter Product Name"
                            />
                            {errors.name && (
                                <p className="text-red-500">{errors.name.message}</p>
                            )}

                            {/* category */}
                            <label className="label">Category</label>
                            <select {...register("category")} className="select select-bordered w-full">
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>

                            {/* description */}
                            <label className="label">Description</label>
                            <input
                                type="text"
                                {...register("description", { required: "Description is required" })}
                                className="input w-full"
                                placeholder="Enter Product Description"
                            />
                            {errors.description && (
                                <p className="text-red-500">{errors.description.message}</p>
                            )}

                            {/* origin */}
                            <label className="label">Origin</label>
                            <input
                                type="text"
                                {...register("origin", { required: "Origin is required" })}
                                className="input w-full"
                                placeholder="Enter Product Origin"
                            />

                            {/* ingredients */}
                            <label className="label">Ingredients (comma separated)</label>
                            <input
                                type="text"
                                {...register("ingredients")}
                                className="input w-full"
                                placeholder="sugar, milk, cocoa"
                            />

                            {/* roast level */}
                            <label className="label">Roast Level</label>
                            <input
                                type="text"
                                {...register("roastLevel")}
                                className="input w-full"
                                placeholder="Light, Medium, Dark"
                            />
                        </fieldset>

                        {/* Pricing & Stock */}
                        <fieldset className="fieldset border p-4">
                            <legend className="fieldset-legend">Pricing & Stock</legend>

                            <label className="label">Price</label>
                            <input
                                type="number"
                                {...register("price", { valueAsNumber: true, min: 0 })}
                                className="input w-full"
                                placeholder="Enter Product Price"
                            />

                            <label className="label">Currency</label>
                            <input
                                type="text"
                                {...register("currency")}
                                className="input w-full"
                                placeholder="BDT / USD"
                            />

                            <label className="label">Quantity</label>
                            <input
                                type="number"
                                {...register("quantity", { valueAsNumber: true, min: 0 })}
                                className="input w-full"
                                placeholder="Quantity"
                            />

                            <label className="label">Sizes</label>
                            <div className="flex gap-3">
                                {ALLOWED_SIZES.map(size => (
                                    <label key={size} className="flex items-center gap-1">
                                        <input
                                            type="checkbox"
                                            value={size}
                                            {...register("sizes")}
                                            className="checkbox"
                                        />
                                        {size}
                                    </label>
                                ))}
                            </div>


                            {/* stock checkboxes */}
                            <div className="flex items-center gap-2">
                                <label className="label">In Stock</label>
                                <input type="checkbox" {...register("inStock")} className="checkbox" />
                            </div>

                            <div className="flex items-center gap-2">
                                <label className="label">Available</label>
                                <input type="checkbox" {...register("available")} className="checkbox" />
                            </div>
                        </fieldset>
                    </div>

                    {/* Attributes */}
                    <fieldset className="fieldset border p-4">
                        <legend className="fieldset-legend">Attributes</legend>
                        <label className="label">Caffeine Content (mg)</label>
                        <input
                            type="number"
                            {...register("caffeineContent", { valueAsNumber: true })}
                            className="input w-full"
                        />

                        <div className="flex items-center gap-2">
                            <label className="label">Seasonal</label>
                            <input type="checkbox" {...register("seasonal")} className="checkbox" />
                        </div>

                        <div className="flex items-center gap-2">
                            <label className="label">Special</label>
                            <input type="checkbox" {...register("isSpecial")} className="checkbox" />
                        </div>
                    </fieldset>

                    {/* Nutrition */}
                    <fieldset className="fieldset border p-4">
                        <legend className="fieldset-legend">Nutrition</legend>
                        <label className="label">Calories</label>
                        <input
                            type="number"
                            {...register("calories", { valueAsNumber: true })}
                            className="input w-full"
                            placeholder="Calories"
                        />
                    </fieldset>

                    {/* Media & Tags */}
                    <fieldset className="fieldset border p-4">
                        <legend className="fieldset-legend">Media & Tags</legend>
                        <label className="label">Tags (comma separated)</label>
                        <input
                            type="text"
                            {...register("tags")}
                            className="input w-full"
                            placeholder="coffee, blackCoffee"
                        />

                        <label className="label">Image URL</label>
                        <input
                            type="text"
                            {...register("image")}
                            className="input w-full"
                            placeholder="https://example.com/image.jpg"
                        />
                    </fieldset>
                </div>

                {/* Submit */}
                <div>
                    <button type="submit" className="btn btn-primary w-full">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;
