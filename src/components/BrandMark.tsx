export function BrandMark({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  if (size === 'lg') {
    return (
      <div className="relative z-[2] flex items-center justify-center">
        <span
          className="bg-gradient-to-b from-lime-light to-lime bg-clip-text font-cinzel text-[clamp(3.4rem,13vw,7.5rem)] font-extrabold leading-none text-transparent"
          style={{ textShadow: '0 0 40px rgba(198,255,0,0.25)' }}
        >
          DK
        </span>
        <span className="ml-[-8px] flex h-[clamp(2.6rem,9vw,5.6rem)] w-[clamp(2.6rem,9vw,5.6rem)] items-center justify-center rounded-full border-[clamp(2px,0.5vw,4px)] border-white font-cinzel text-[clamp(1.2rem,4vw,2.6rem)] font-bold text-white">
          22
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="bg-gradient-to-b from-lime-light to-lime bg-clip-text font-cinzel text-[1.15rem] font-extrabold text-transparent">
        DK
      </span>
      <span className="ml-[-4px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-lime font-cinzel text-[0.6rem] font-bold text-white">
        22
      </span>
    </div>
  );
}
