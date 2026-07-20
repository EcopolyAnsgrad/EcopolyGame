export default function Outline() {
    return (
        <>
            {/* Outer glass body */}
            <path
                d="
                M75 55
                L75 300
                Q75 335 150 335
                Q225 335 225 300
                L225 55
                "
                fill="none"
                stroke="#222"
                strokeWidth="5"
            />

            {/* Top rim */}
            <ellipse
                cx="150"
                cy="55"
                rx="75"
                ry="18"
                fill="none"
                stroke="#222"
                strokeWidth="5"
            />

            {/* Inner rim */}
            <path
                d="
                M85 62
                Q150 90 215 62
                "
                fill="none"
                stroke="#222"
                strokeWidth="4"
            />

            {/* Bottom curve */}
            <path
                d="
                M75 300
                Q150 350 225 300
                "
                fill="none"
                stroke="#222"
                strokeWidth="5"
            />


            {/* Measurement marks */}
            {
                Array.from({length:7}).map((_,i)=>(
                    <line
                        key={i}
                        x1="75"
                        y1={110+i*25}
                        x2="95"
                        y2={110+i*25}
                        stroke="#222"
                        strokeWidth="3"
                    />
                ))
            }


            {/* Glass reflection */}
            <path
                d="
                M100 90
                Q105 170 110 240
                "
                fill="none"
                stroke="#aaa"
                strokeWidth="4"
            />
        </>
    );
}