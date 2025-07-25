import LoaderImage from '/logo.png'

const Loader: React.FunctionComponent = () => {
    return (
        <div className="min-h-screen mx-auto flex justify-center items-center flex-col">
            <img src={LoaderImage} alt='Loading........' />
            <p>Coffee is Loading.......</p>
        </div>
    );
};

export default Loader;