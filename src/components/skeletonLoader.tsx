import { Skeleton } from "@nextui-org/skeleton";

const SkeletonLoader = () => {
    return (
        <div>
            <Skeleton isLoaded={false} className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300">
                    This is a Temp text
                </div>
            </Skeleton>
        </div>
    );
}

export default SkeletonLoader;