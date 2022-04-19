import Image from "next/image"
import { motion } from "framer-motion"

const calculateMargin = (pageProgress) => {
  if (pageProgress < 15) {
    return 2
  }
  if (pageProgress > 90) {
    return (pageProgress - 10) * 3.35
  }
  return pageProgress * 3
}
const FileTransfer = ({ pageProgress }) => (
  <div className="relative h-full w-full">
    <div className="absolute flex justify-center w-full z-10">
      <Image width="180" height="180" src={`/images/folder.png`} alt="folder" />
    </div>
    <motion.div
      className="absolute flex justify-center w-full z-0 rotate-12"
      animate={{
        top: `${calculateMargin(pageProgress)}%`
      }}
      transition={{ type: "tween", duration: 0.5 }}
      initial={false}
    >
      <Image
        width="100"
        height="100"
        src={`/images/file.png`}
        alt="folderEmpty"
      />
    </motion.div>
    <div className="absolute flex justify-center w-full top-[300%] z-10">
      <Image width="180" height="180" src={`/images/folder.png`} alt="folder" />
    </div>
  </div>
)

export default FileTransfer
