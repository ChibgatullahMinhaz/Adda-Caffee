import { useForm, type SubmitHandler } from "react-hook-form";
import type { CoffeeFormData } from "../../../../types/types";
import { addCoffee } from "../../../../api/addCoffee";
import { toast } from "react-toastify";
import { ALLOWED_SIZES } from "../../../../javascript/categoryObject";
import { useContext } from "react";
import { CategoryContext } from "../../../../Contexts/Context/CategoryContext";




const AddProducts: React.FunctionComponent = () => {
    //@ get all category from context
    const categoryArray = useContext(CategoryContext);
    const categories = categoryArray?.map(c => c.categories);

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
            images: undefined,
            seasonal: false,
            quantity: 0,
            ingredients: [],
            roastLevel: "",
            origin: "",
            available: true,
            isSpecial: false
        }
    });

    const onSubmit: SubmitHandler<CoffeeFormData> = (data) => {
        const files = data.images;
        // @ 'data.images' theke file input gulo collect korchi. 
        //   Eta user jeta upload korbe tar jonno.

        if (!files || files.length === 0) {
            toast.error("Please select at least 1 image");
            return;
        }
        // @ Check korchi j user kono image select koreche kina.
        //   Jodi kono image na thake, toast message dekhai ar function terminate kori.

        if (files.length > 5) {
            toast.error("You can upload a maximum of 5 images");
            return;
        }
        // @ Check korchi j 5 er beshi image upload na hoye. 
        //   Backend/multer limit er jonno restriction.

        // convert comma separated strings to array
        const tags = (data.tags as unknown as string)
            .split(",")
            .map((t) => t.trim());
        // @ User input e tags comma separated string hisebe ashte pare. 
        //   Eita array te convert korchi, ar extra space trim korchi.

        const ingredients = (data.ingredients as unknown as string)
            .split(",")
            .map((i) => i.trim());
        // @ Ingredients field o same vabe comma separated thakte pare. 
        //   Array te convert korchi, backend easily handle korte pare.

        // @ FormData is api type ,,,, 
        const formData = new FormData();
        // @ FormData object create korchi, jeta multipart/form-data hisebe backend e pathano hoy.
        //   Eta file upload er jonno compulsory.

        Array.from(files).forEach((file) => formData.append("images", file));
        // @ User select kora prottek file FormData te append korchi.
        //   'images' key ta backend e multer er field name er shathe match korte hobe.

        formData.append("name", data.name);
        // @ Product name FormData te add korchi. 
        //   Backend e DB te save korar jonno.

        formData.append("category", data.category);
        // @ Coffee category add korchi. Default 'Other' hote pare.

        formData.append("description", data.description);
        // @ Product description add korchi. Required field.

        formData.append("price", String(data.price));
        // @ Price add korchi. FormData always string accept kore, tai String() use korchi.

        data.sizes.forEach((size) => formData.append("sizes", size))
        // @ Sizes checkbox theke array asche. Prottek size individually append korchi.
        //   Eita enum array validation error prevent korbe.

        formData.append("currency", data.currency);
        // @ Currency field add korchi (BDT / USD etc.)

        formData.append("inStock", String(data.inStock));
        // @ In stock checkbox boolean value ke string e convert kore add korchi.

        formData.append("caffeineContent", String(data.caffeineContent));
        // @ Caffeine content numeric field add korchi, string e convert kore.

        formData.append("ratings", String(data.ratings));
        // @ Ratings field DB save er jonno add korchi.

        formData.append("calories", String(data.calories));
        // @ Calories field add korchi.

        formData.append("tags", tags.join(","));
        // @ Tags array ke comma separated string e convert kore add korchi, 
        //   jate backend easily parse korte pare.

        formData.append("seasonal", String(data.seasonal));
        // @ Seasonal checkbox boolean ke string e convert kore add korchi.

        formData.append("quantity", String(data.quantity));
        // @ Quantity field add korchi. String e convert.

        formData.append("ingredients", ingredients.join(","));
        // @ Ingredients array ke comma separated string e convert kore add korchi.

        formData.append("roastLevel", data.roastLevel);
        // @ Roast level add korchi (Light, Medium, Dark etc.)

        formData.append("origin", data.origin);
        // @ Origin field add korchi. Product origin DB e save hobe.

        formData.append("available", String(data.available));
        // @ Available checkbox value string e convert kore add korchi.

        formData.append("isSpecial", String(data.isSpecial));
        // @ Special checkbox value string e convert kore add korchi.

        addCoffee(formData)
        // @ Finally FormData ta addCoffee function e pathachi. 
        //   Eta backend e post request hisebe chole jabe, jekhane multer handle korbe.

        reset();
        // @ Form submit er por form reset kore dichi. 
        //   Sob input blank hoye jabe ar user nobo product add korte parbe.
    };



    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center md:text-4xl">
                Add New Coffee
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
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

                        <label className="label">Upload Product Images</label>
                        <input
                            type="file"
                            {...register("images")}
                            className="file-input w-full"
                            name="images"
                            multiple
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
