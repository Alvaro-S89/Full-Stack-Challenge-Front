import AuthForm from "./AuthForm";

import wallpaper from "../../assets/images/wallpaper-pepe.jpg";
import Signboard from "../../shared/components/signboard/signboard";

const AuthPage = () => {

    const styles = {
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        opacity: '0.9'
    }

    return (
        <div className="h-full w-full flex flex-col items-center justify-center" style={styles}>
                <Signboard text="memeGallery" />
            <div className="w-full max-w-xs bg-stone-200/50 backdrop-blur shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <AuthForm />
            </div>
        </div>
    );
}

export default AuthPage