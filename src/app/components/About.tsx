import Link from 'next/link'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

import { MoveRight } from 'lucide-react'

export const About = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="flex items-center justify-between md:justify-center">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex max-w-2xl flex-col gap-6 text-xl md:text-center sm:text-lg"
        >
          <p>
            Hello, my name is{' '}
            <span className="font-bold text-target">Ramith Kulal</span>.
            I&apos;m a creative{' '}
            <span className="font-bold text-target">Full Stack Developer</span>{' '}
            who loves turning complex problems into sleek, modern web solutions.
            My expertise includes technologies like{' '}
            <span className="font-bold text-target">
              React, Next.js, Tailwind CSS, Node.js, and MongoDB
            </span>
            , and I have a deep passion for crafting engaging, user-friendly
            applications.
          </p>
          <p>
            Some of my standout projects include{' '}
            <span className="font-bold text-target">Bidxpert</span>, a dynamic
            auction platform for real-time bidding, and a{' '}
            <span className="font-bold text-target">
              real-time chat app using Socket.io
            </span>
            . I&apos;ve also actively contributed to the open-source community
            through events like JWOC and clinched the title at the
            KIMO&apos;s-Edge competition. Exploring the latest tech trends, from
            TypeScript to Web3, keeps me inspired.
          </p>
          <p>
            Currently, I&apos;m diving deeper into both front-end and back-end
            technologies while building innovative personal projects and
            contributing to open source. If youre interested in collaborating or
            have an opportunity, let&apos;s connect—unless you&apos;re here to
            convince me that tabs are better than spaces!
          </p>

          <MotionDiv className="flex justify-start md:justify-center">
            <Link
              href="#contact"
              className="flex items-center gap-x-2 text-target transition-all hover:gap-x-3 hover:text-[#3352da]"
            >
              Contact me <MoveRight />
            </Link>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-1 justify-end pl-8 md:hidden"
        >
          <div className="w-80 pb-10">
            <div className="flex flex-wrap justify-center gap-4 opacity-70">
              <span className="h-3 w-48 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
            </div>
          </div>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
