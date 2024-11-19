import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaCode,
  FaTwitter
} from 'react-icons/fa'

export const Contact = () => {
  return (
    <SectionContainer id="contact" title="Contact">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        <p className="max-w-2xl text-center text-lg">
          Feel free to connect with me on LinkedIn, X (Twitter), Instagram, or
          check out my LeetCode profile.
        </p>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex gap-6 text-4xl"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ramith-kulal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-600" />
          </a>
          {/* X (Twitter) */}
          <a
            href="https://x.com/ramith_kulal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-400" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/ramith_kulal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500" />
          </a>
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/ramith_kulal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode className="hover:text-yellow-500" />
          </a>
        </MotionDiv>
      </MotionDiv>
    </SectionContainer>
  )
}
