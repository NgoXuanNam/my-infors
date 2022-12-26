import loading from '~/assets/image/loading.gif';

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-[100vh] w-full bg-[#f1f2f3]">
            <img src={loading} alt="loading..." />
        </div>
    );
}
