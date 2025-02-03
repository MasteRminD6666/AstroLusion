import React from "react";
import "../../app/custom.css";

const HexGrid = () => {
    const nRows = 3; // At least 1
    const nColsMin = 2; // At least 1
    const nColsMax = nColsMin + 1;
    const nColsSum = nColsMax + nColsMin;
    const n = Math.ceil(0.5 * nRows) * nColsMin + Math.floor(0.5 * nRows) * nColsMax;

    const imgs = [
        "/AustroGlass.png",
        "/AustroLogo.png",
        "/AustroWave1.png",
        "/output.jpg",
        "/space.png",
        "Austro1.png",
    ];

    return (
        <>
            <div className="flex flex-row relative items-center justify-center  w-full h-full -z-20">
                <div className="absolute w-auto h-auto top-0 z-[5]">
                    <span className="text-[40px] font-medium text-center text-gray-200">
                        Gallery{" "}
                        </span>{" "}
                </div>
                </div>
            <div className="gallery">
                
                {imgs.map((src, index) => (
                    <div key={index} className="clipped-border">
                        <img src={src} alt={`Hex image ${index}`} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default HexGrid;
