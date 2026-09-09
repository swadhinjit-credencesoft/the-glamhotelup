"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props { 
  end: number; 
  suffix?: string; 
  prefix?: string; 
  duration?: number;
  decimals?: number;
  className?: string;
}

export function CounterNumber({ end, suffix="", prefix="", duration=2.5, decimals=0, className="" }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  return (
    <span ref={ref} className={`font-barlow font-bold ${className}`}>
      {inView ? (
        <CountUp start={0} end={end} duration={duration} decimals={decimals} prefix={prefix} suffix={suffix} useEasing={true} separator="," />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
