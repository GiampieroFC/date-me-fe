import { create } from "zustand";

export type Animate = 'normal' | 'big';

interface AnimatedImage {
    animate: Animate;
    setAnimate: (animate: Animate) => void;
}

export const useAnimatedImage = create<AnimatedImage>()((set) => ({
    animate: 'normal',
    setAnimate: (newAnimate: Animate) => set({ animate: newAnimate }),
}));