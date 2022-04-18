import Image from "next/image"
import { motion } from "framer-motion"

const calculateMargin = (pageProgress) => {
  if (pageProgress < 15) {
    return 16
  }
  if (pageProgress > 90) {
    return pageProgress - 10
  }
  return pageProgress
}
const FileTransfer = ({pageProgress}) => (
  <div>
    <div className="absolute flex justify-center w-full top-[15%] z-10">
      <Image width="180" height="180" src={`/images/folder.png`} alt="folder" />
    </div>
    <motion.div
      className="absolute flex justify-center w-full z-0 rotate-12"
      animate={{
        top: `${calculateMargin(pageProgress)}%`
      }}
      transition={{ duration: 0.75 }}
      initial={false}
    >
      <Image
        width="100"
        height="100"
        src={`/images/file.png`}
        alt="folderEmpty"
      />
    </motion.div>
    <div className="absolute flex justify-center w-full top-[90%] z-10">
      <Image width="180" height="180" src={`/images/folder.png`} alt="folder" />
    </div>
  </div>
)

export default FileTransfer