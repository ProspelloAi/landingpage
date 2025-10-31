'use client';
import quantumLogo from '@/assets/images/quantum.svg';
import acmeLogo from '@/assets/images/acme-corp.svg';
import echoValleyLogo from '@/assets/images/echo-valley.svg';
import pulseLogo from '@/assets/images/pulse.svg';
import outsideLogo from '@/assets/images/outside.svg';
import apexLogo from '@/assets/images/apex.svg';
import celestialLogo from '@/assets/images/celestial.svg';
import twiceLogo from '@/assets/images/twice.svg';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Quantum', image: quantumLogo },
  { name: 'Acme Corp', image: acmeLogo },
  { name: 'Echo Valley', image: echoValleyLogo },
  { name: 'Pulse', image: pulseLogo },
  { name: 'Outside', image: outsideLogo },
  { name: 'Apex', image: apexLogo },
  { name: 'Celestial', image: celestialLogo },
  { name: 'Twice', image: twiceLogo },
];
const LogoTicker = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-gray-800 text-xl">
          Already chosen by these market leaders
        </h3>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_20%,transparent)]">
          <motion.div
            animate={{ x: '-50%' }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map(({ name, image }) => (
                  <Image key={name} src={image} alt={name} />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
