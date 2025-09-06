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
const sizes = ["small", "medium", "large"];
const AddProducts = () => {
    const { register, handleSubmit } = useForm<CoffeeFormData>({
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
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Coffee</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Name */}
                <div>
                    <label className="font-semibold">Name</label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category" className="font-semibold">Category</label>
                    <select {...register("category")} className="select select-bordered w-full">
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Description */}
                <div>
                    <label className="font-semibold">Description</label>
                    <textarea {...register("description")} className="textarea textarea-bordered w-full" />
                </div>

                {/* Price */}
                <div>
                    <label className="font-semibold">Price</label>
                    <input
                        type="number"
                        {...register("price", { required: true, min: 0 })}
                        className="input input-bordered w-full"
                    />
                </div>
                {/* Tags */}
                <div>
                    <label className="font-semibold">Tags (comma separated)</label>
                    <input
                        type="text"
                        placeholder="e.g. strong, hot, creamy"
                        {...register("tags")}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Ingredients */}
                <div>
                    <label className="font-semibold">Ingredients (comma separated)</label>
                    <input
                        type="text"
                        placeholder="e.g. coffee beans, milk, sugar"
                        {...register("ingredients")}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Sizes */}
                <div>
                    <label className="font-semibold">Sizes</label>
                    <select {...register("sizes")} className="select select-bordered w-full">
                        {sizes.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Quantity */}
                <div>
                    <label className="font-semibold">Quantity</label>
                    <input
                        type="number"
                        {...register("quantity", { required: true, min: 0 })}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Available */}
                <div className="flex items-center gap-2">
                    <input type="checkbox" {...register("available")} className="checkbox" />
                    <label>Available</label>
                </div>

                {/* Special */}
                <div className="flex items-center gap-2">
                    <input type="checkbox" {...register("isSpecial")} className="checkbox" />
                    <label>Is Special</label>
                </div>

                {/* Origin */}
                <div>
                    <label className="font-semibold">Origin</label>
                    <input type="text" {...register("origin", { required: true })} className="input input-bordered w-full" />
                </div>

                {/* Image */}
                <div>
                    <label className="font-semibold">Image URL</label>
                    <input type="text" {...register("image")} className="input input-bordered w-full" />
                </div>

               
            </form>
        </div>
    );
};

export default AddProducts;
