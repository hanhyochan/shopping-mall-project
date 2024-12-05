import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
const CategoryHeader = ({title, className, sortByLowPrice, sortByHighPrice}) => {
    return (
        <>
            <div className="flex items-center justify-between pt-5 pb-5">
                <Heading
                    text={title}
                    className={className}
                />
                <div>
                    <Button
                        type="primary"
                        className="mr-2"
                        text="인기순"
                    />
                    <Button
                        color="default"
                        variant="filled"
                        className="mr-2"
                        text="낮은가격"
                        onClick={sortByLowPrice}
                    />

                    <Button
                        color="default"
                        variant="filled"
                        type="warning"
                        text="높은가격"
                        onClick={sortByHighPrice}
                    />
                </div>
            </div>
        </>
    );
};

export default CategoryHeader;
