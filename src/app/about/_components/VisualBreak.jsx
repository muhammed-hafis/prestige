import React from 'react';

const VisualBreak = () => (
    <section className="w-full overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-[1920px] aspect-[21/9] sm:aspect-[21/6] flex items-center justify-center">
            <img
                src="/images/design.webp"
                alt="Architectural Visual"
                className="max-w-[75%] max-h-full object-contain mx-auto"
            />
        </div>
    </section>
);

export default VisualBreak;
