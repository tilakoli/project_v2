import React from "react";
import { motion } from "framer-motion";
const Signature = ({ strokeColor }) => {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 20,
        ease: "linear",
      },
    },
  };

  return (
    <svg width="230" height="98" viewBox="fill">
      <motion.path
        d="M10.5825 40.368C9.3025 40.0267 7.85183 39.344 6.2305 38.32C4.60917 37.2107 3.20117 35.8453 2.0065 34.224C0.811833 32.5173 0.2145 30.64 0.2145 28.592C0.2145 27.6533 0.385167 26.7147 0.7265 25.776C0.7265 25.6907 0.7265 25.392 0.7265 24.88C0.811833 24.368 0.897167 23.9413 0.9825 23.6C1.92117 19.3333 4.09717 15.8347 7.5105 13.104C10.9238 10.288 15.1052 8.112 20.0545 6.576C25.0038 5.04 30.1665 4.10133 35.5425 3.75999C36.5665 3.67466 37.5905 3.632 38.6145 3.632C39.6385 3.632 40.6625 3.632 41.6865 3.632C47.6598 3.632 53.5905 4.016 59.4785 4.784C65.3665 5.552 70.6998 6.32 75.4785 7.088C80.3425 7.77067 84.1825 8.15467 86.9985 8.24C89.3878 5.76533 91.1372 4.4 92.2465 4.144C92.5025 4.05866 92.8865 4.016 93.3985 4.016C94.3372 4.016 95.1905 4.272 95.9585 4.784C96.7265 5.21066 97.1105 5.85066 97.1105 6.70399C97.1105 7.472 96.7692 8.19733 96.0865 8.88C95.4892 9.47733 94.5505 10.2027 93.2705 11.056C91.9905 11.9093 90.7532 12.976 89.5585 14.256C87.8518 15.9627 86.3158 17.8827 84.9505 20.016C83.5852 22.1493 82.9025 24.1973 82.9025 26.16C82.9025 27.6107 83.2438 28.848 83.9265 29.872C84.0972 30.0427 84.1825 30.2133 84.1825 30.384C84.1825 31.0667 83.8412 31.408 83.1585 31.408C82.5612 31.408 81.9212 31.0667 81.2385 30.384C80.5558 29.5307 80.2145 27.696 80.2145 24.88C80.2145 23.1733 80.3852 21.3387 80.7265 19.376C81.0678 17.4133 81.6652 15.6213 82.5185 14C82.8598 13.4027 83.3292 12.72 83.9265 11.952C84.6092 11.0987 85.1212 10.4587 85.4625 10.032C79.3185 9.94667 73.0892 9.60533 66.7745 9.008C60.4598 8.41066 54.2305 8.112 48.0865 8.112C45.1852 8.112 41.9425 8.32533 38.3585 8.752C34.7745 9.09333 31.1052 9.69067 27.3505 10.544C23.5958 11.3973 20.0972 12.6347 16.8545 14.256C13.6118 15.792 10.8385 17.712 8.5345 20.016C6.2305 22.32 4.73717 25.0933 4.0545 28.336C3.96917 28.6773 3.88383 28.976 3.7985 29.232C3.7985 29.488 3.7985 29.744 3.7985 30C3.7985 31.6213 4.26783 32.9867 5.2065 34.096C6.2305 35.2053 7.3825 36.144 8.6625 36.912C9.9425 37.5947 10.9238 38.2347 11.6065 38.832C12.2038 39.1733 12.5025 39.5147 12.5025 39.856C12.5025 40.1973 12.2892 40.4107 11.8625 40.496C11.5212 40.5813 11.0945 40.5387 10.5825 40.368ZM23.2545 81.456C22.9985 81.456 22.4865 81.3707 21.7185 81.2C20.9505 81.0293 20.2252 80.816 19.5425 80.56C18.8598 80.304 18.4758 80.0053 18.3905 79.664C18.1345 78.0427 18.5185 75.7387 19.5425 72.752C20.6518 69.68 22.0598 66.3093 23.7665 62.64C25.5585 58.9707 27.3932 55.3013 29.2705 51.632C31.2332 47.9627 33.0252 44.6773 34.6465 41.776C36.2678 38.7893 37.4625 36.528 38.2305 34.992C38.9132 33.5413 39.2545 32.3467 39.2545 31.408C39.2545 30.9813 39.2118 30.6827 39.1265 30.512C39.1265 30.256 39.0838 30.0427 38.9985 29.872C39.1692 28.848 39.8092 27.4827 40.9185 25.776C42.0278 24.0693 43.3932 22.3627 45.0145 20.656C46.6358 18.9493 48.3425 17.5413 50.1345 16.432C52.0118 15.2373 53.8038 14.64 55.5105 14.64C56.0225 14.64 56.9185 14.8533 58.1985 15.28C59.4785 15.6213 60.6305 16.2187 61.6545 17.072C62.6785 17.9253 63.1052 19.0347 62.9345 20.4C62.3372 19.9733 61.8252 19.76 61.3985 19.76C59.4358 19.76 57.3025 20.6987 54.9985 22.576C52.6945 24.4533 50.3052 26.9707 47.8305 30.128C45.4412 33.2853 43.0518 36.7413 40.6625 40.496C38.3585 44.2507 36.1825 48.048 34.1345 51.888C32.0865 55.6427 30.2945 59.1413 28.7585 62.384C27.2225 65.5413 26.0278 68.1013 25.1745 70.064C24.8332 70.9173 24.5772 71.6853 24.4065 72.368C24.2358 73.0507 24.1505 73.6053 24.1505 74.032C24.1505 75.2267 24.5772 75.824 25.4305 75.824C26.0278 75.824 26.6678 75.6107 27.3505 75.184C28.0332 74.672 28.6732 74.0747 29.2705 73.392C30.2092 72.2827 31.0625 71.2587 31.8305 70.32C32.5985 69.296 33.2812 68.8693 33.8785 69.04C33.9638 69.1253 34.0065 69.2533 34.0065 69.424C34.0065 69.936 33.7505 70.5333 33.2385 71.216C32.7265 71.8987 32.4278 72.2827 32.3425 72.368C31.6598 73.2213 30.8065 74.3733 29.7825 75.824C28.8438 77.2747 27.8198 78.5547 26.7105 79.664C25.6012 80.8587 24.4492 81.456 23.2545 81.456ZM67.4065 33.456C66.2972 33.456 65.1452 33.3707 63.9505 33.2C62.7558 32.944 62.1585 32.1333 62.1585 30.768C62.1585 30.512 62.7132 29.9147 63.8225 28.976C65.0172 28.0373 66.2118 27.0987 67.4065 26.16C68.6865 25.136 69.4545 24.5387 69.7105 24.368C71.1612 23.1733 72.0572 22.576 72.3985 22.576C72.8252 22.576 72.8252 23.1307 72.3985 24.24C71.9718 25.3493 71.7585 26.3307 71.7585 27.184C71.7585 27.6107 71.5025 28.336 70.9905 29.36C70.4785 30.384 69.8812 31.3227 69.1985 32.176C68.5158 33.0293 67.9185 33.456 67.4065 33.456ZM53.4545 79.28C51.9185 79.28 50.5105 78.9387 49.2305 78.256C48.0358 77.5733 47.1398 76.2933 46.5425 74.416C46.4572 74.16 46.3718 73.904 46.2865 73.648C46.2865 73.392 46.2865 73.0933 46.2865 72.752C46.2865 71.0453 46.6705 68.912 47.4385 66.352C48.2065 63.792 49.1452 61.3173 50.2545 58.928C49.7425 59.6107 49.1452 60.464 48.4625 61.488C47.7798 62.4267 46.7985 63.664 45.5185 65.2C45.1772 65.5413 44.7932 65.712 44.3665 65.712C43.7692 65.712 43.4705 65.3707 43.4705 64.688C43.4705 64.176 43.6412 63.7493 43.9825 63.408C46.2012 60.592 48.1638 58.0747 49.8705 55.856C51.6625 53.6373 52.9852 51.76 53.8385 50.224C53.8385 50.1387 53.7958 50.096 53.7105 50.096C53.7105 50.0107 53.7105 49.9253 53.7105 49.84C53.7105 49.584 53.8385 49.2 54.0945 48.688C54.7772 46.64 55.4598 44.9333 56.1425 43.568C56.9105 42.1173 57.7212 41.3067 58.5745 41.136C58.7452 41.136 58.9158 41.136 59.0865 41.136C59.2572 41.0507 59.4278 41.008 59.5985 41.008C60.5372 41.008 61.3905 41.2213 62.1585 41.648C62.9265 42.0747 63.3105 42.7147 63.3105 43.568C63.3105 44.336 63.0118 45.2747 62.4145 46.384C61.9025 47.4933 61.2198 48.8587 60.3665 50.48C58.4892 54.4053 56.7825 57.9893 55.2465 61.232C53.7958 64.3893 52.9852 66.992 52.8145 69.04C52.7292 69.3813 52.6865 69.7227 52.6865 70.064C52.6865 70.32 52.6865 70.6187 52.6865 70.96C52.6865 74.3733 53.7958 76.08 56.0145 76.08C57.3798 76.08 59.1292 75.3547 61.2625 73.904C63.3958 72.368 65.5718 70.5333 67.7905 68.4C70.0092 66.1813 72.0145 64.0907 73.8065 62.128C75.6838 60.08 76.9638 58.544 77.6465 57.52C77.9025 57.264 78.1585 57.136 78.4145 57.136C78.7558 57.136 79.0118 57.264 79.1825 57.52C79.4385 57.776 79.4812 58.1173 79.3105 58.544C78.5425 59.9947 77.2198 61.8293 75.3425 64.048C73.5505 66.1813 71.5025 68.3573 69.1985 70.576C66.9798 72.7093 64.8038 74.544 62.6705 76.08C61.5612 76.9333 60.1532 77.6587 58.4465 78.256C56.8252 78.9387 55.1612 79.28 53.4545 79.28ZM84.2495 79.28C80.6655 79.28 78.1482 78.384 76.6975 76.592C75.3322 74.8 74.6495 72.5813 74.6495 69.936C74.6495 67.4613 75.2042 64.3467 76.3135 60.592C77.5082 56.8373 79.0442 52.784 80.9215 48.432C82.7988 44.08 84.8042 39.7707 86.9375 35.504C89.1562 31.152 91.3322 27.184 93.4655 23.6C95.6842 19.9307 97.6042 16.9867 99.2255 14.768C100.847 12.6347 102.596 10.5013 104.474 8.368C106.351 6.23466 108.442 4.44267 110.746 2.992C113.05 1.54133 115.652 0.815994 118.554 0.815994C120.516 0.815994 122.18 1.37066 123.546 2.48C124.996 3.504 125.722 5.08266 125.722 7.216C125.722 8.06933 125.551 9.05066 125.21 10.16C124.954 11.2693 124.484 12.4213 123.802 13.616C118.596 22.6613 112.367 31.024 105.114 38.704C97.9455 46.384 90.3508 53.5093 82.3295 60.08C81.9882 61.36 81.6468 62.512 81.3055 63.536C81.0495 64.56 80.8362 65.3707 80.6655 65.968C80.5802 66.3947 80.5375 66.864 80.5375 67.376C80.5375 67.8027 80.5375 68.2293 80.5375 68.656C80.5375 70.704 80.8788 72.496 81.5615 74.032C82.2442 75.568 83.3962 76.336 85.0175 76.336C86.5535 76.336 88.4308 75.6107 90.6495 74.16C92.9535 72.624 95.2575 70.7893 97.5615 68.656C99.8655 66.4373 101.956 64.304 103.833 62.256C105.711 60.208 107.034 58.6293 107.802 57.52C108.058 57.264 108.314 57.136 108.569 57.136C108.911 57.136 109.167 57.3067 109.338 57.648C109.594 57.9893 109.594 58.416 109.338 58.928C108.484 60.3787 107.119 62.1707 105.242 64.304C103.364 66.4373 101.274 68.6133 98.9695 70.832C96.6655 72.9653 94.4468 74.8427 92.3135 76.464C89.6682 78.3413 86.9802 79.28 84.2495 79.28ZM84.1215 54.96C87.3642 52.7413 90.7348 49.8827 94.2335 46.384C97.7322 42.8 101.146 38.9173 104.474 34.736C107.887 30.5547 110.959 26.416 113.69 22.32C116.506 18.224 118.767 14.512 120.474 11.184C120.986 10.2453 121.327 9.43466 121.498 8.752C121.754 7.984 121.882 7.30133 121.882 6.70399C121.882 5.08266 121.199 4.272 119.834 4.272C118.639 4.272 117.146 4.91199 115.354 6.19199C110.746 9.77599 106.479 14.384 102.554 20.016C98.6282 25.5627 95.1295 31.408 92.0575 37.552C88.9855 43.696 86.3402 49.4987 84.1215 54.96ZM141.77 79.28C140.319 79.28 138.954 78.9387 137.674 78.256C136.479 77.5733 135.583 76.2933 134.986 74.416C134.73 73.648 134.602 72.5813 134.602 71.216C134.602 69.3387 134.858 67.248 135.37 64.944C135.882 62.64 136.436 60.6773 137.034 59.056C136.607 59.2267 135.796 59.9947 134.602 61.36C133.492 62.64 132.084 64.2187 130.378 66.096C128.756 67.888 126.922 69.7227 124.874 71.6C122.911 73.392 120.863 74.8853 118.73 76.08C116.596 77.2747 114.506 77.872 112.458 77.872C111.092 77.872 109.642 77.488 108.106 76.72C106.57 75.8667 105.332 74.8 104.394 73.52C103.114 71.8133 102.474 70.064 102.474 68.272C102.474 65.968 103.242 63.5787 104.778 61.104C106.399 58.6293 108.447 56.24 110.922 53.936C113.482 51.5467 116.17 49.4133 118.986 47.536C121.887 45.5733 124.618 43.952 127.178 42.672C129.823 41.3067 131.956 40.4107 133.578 39.984C135.284 39.472 137.204 39.216 139.338 39.216C140.532 39.216 141.77 39.3867 143.05 39.728C144.33 39.984 145.396 40.4533 146.25 41.136C146.932 41.4773 147.487 41.9467 147.914 42.544C148.34 43.1413 148.554 43.7813 148.554 44.464C148.554 45.1467 148.255 45.36 147.658 45.104C146.975 44.08 146.036 43.44 144.842 43.184C143.732 42.8427 142.58 42.672 141.386 42.672C137.972 42.672 134.218 43.7813 130.122 46C126.026 48.2187 122.356 50.8213 119.114 53.808C118.09 54.6613 116.682 56.1547 114.89 58.288C113.183 60.336 111.604 62.5973 110.154 65.072C108.703 67.5467 107.978 69.808 107.978 71.856C107.978 72.9653 108.276 73.9467 108.874 74.8C109.215 75.3973 109.77 75.696 110.538 75.696C111.732 75.696 113.311 75.056 115.274 73.776C117.322 72.496 119.412 70.96 121.546 69.168C123.679 67.2907 125.599 65.4987 127.306 63.792C129.098 62.0853 130.378 60.848 131.146 60.08C131.572 59.6533 132.383 58.8 133.578 57.52C134.858 56.1547 136.223 54.704 137.674 53.168C139.124 51.632 140.404 50.3093 141.514 49.2C142.708 48.0907 143.476 47.536 143.818 47.536C144.244 47.536 144.927 47.664 145.866 47.92C146.89 48.0907 147.743 48.3893 148.426 48.816C149.108 49.2427 149.236 49.7973 148.81 50.48C146.591 53.7227 144.799 57.136 143.434 60.72C142.154 64.2187 141.386 66.992 141.13 69.04C141.044 69.3813 141.002 69.7227 141.002 70.064C141.002 70.32 141.002 70.6187 141.002 70.96C141.002 74.3733 142.196 76.08 144.586 76.08C145.866 76.08 147.572 75.312 149.706 73.776C151.839 72.24 154.015 70.4053 156.234 68.272C158.452 66.1387 160.458 64.0907 162.25 62.128C164.127 60.08 165.407 58.544 166.09 57.52C166.346 57.264 166.602 57.136 166.858 57.136C167.199 57.136 167.498 57.3067 167.754 57.648C168.01 57.904 168.01 58.2453 167.754 58.672C166.815 60.208 165.45 62.0427 163.658 64.176C161.866 66.3093 159.86 68.4427 157.642 70.576C155.423 72.7093 153.247 74.544 151.114 76.08C150.004 76.9333 148.596 77.6587 146.89 78.256C145.183 78.9387 143.476 79.28 141.77 79.28ZM208.602 97.712C205.444 97.712 202.415 96.56 199.514 94.256C196.698 92.0373 194.095 89.0507 191.706 85.296C189.316 81.6267 187.268 77.616 185.562 73.264C183.94 68.8267 182.746 64.5173 181.978 60.336C179.076 64.432 176.559 68.1867 174.426 71.6C172.378 75.0133 170.884 76.976 169.946 77.488C169.519 77.744 168.538 78.1707 167.002 78.768C165.466 79.3653 164.314 79.664 163.546 79.664C162.948 79.664 162.778 79.3653 163.034 78.768C163.204 78.4267 163.631 77.36 164.314 75.568C164.996 73.6907 165.807 71.3867 166.746 68.656C167.684 65.9253 168.666 63.0667 169.69 60.08C170.799 57.0933 171.866 54.2773 172.89 51.632C172.036 52.5707 171.055 53.7653 169.946 55.216C168.836 56.5813 167.556 58.3307 166.106 60.464C165.85 60.8907 165.423 61.104 164.826 61.104C164.228 61.104 163.93 60.848 163.93 60.336C163.93 59.824 164.228 59.2267 164.826 58.544C166.02 57.0933 167.3 55.4293 168.666 53.552C170.031 51.6747 171.354 49.84 172.634 48.048C173.914 46.256 174.938 44.8053 175.706 43.696C174.426 43.0133 173.786 42.1173 173.786 41.008C173.786 40.3253 174.042 39.8133 174.554 39.472C175.151 39.0453 175.748 39.0453 176.346 39.472C176.687 39.6427 176.986 39.728 177.242 39.728C178.692 35.888 180.527 31.7493 182.746 27.312C184.964 22.7893 187.524 18.5227 190.426 14.512C193.327 10.416 196.442 7.088 199.77 4.528C203.183 1.968 206.767 0.687996 210.522 0.687996C210.948 0.687996 211.375 0.730662 211.802 0.815994C212.314 0.815994 212.783 0.85866 213.21 0.943993C213.722 1.02933 214.191 1.2 214.618 1.45599C215.13 1.712 215.599 1.92533 216.026 2.09599C217.988 3.20533 218.97 4.82666 218.97 6.96C218.97 8.496 218.543 10.2027 217.69 12.08C216.836 13.872 215.77 15.664 214.49 17.456C213.295 19.248 212.1 20.8693 210.906 22.32C209.711 23.7707 208.772 24.88 208.09 25.648C203.908 29.9147 199.386 33.7973 194.522 37.296C189.743 40.7947 185.562 43.2693 181.978 44.72C180.612 47.6213 179.332 50.608 178.138 53.68C176.943 56.6667 175.919 59.44 175.066 62C174.298 64.4747 173.7 66.3947 173.274 67.76C174.724 65.968 176.09 64.176 177.37 62.384C178.735 60.5067 180.1 58.672 181.466 56.88C181.466 56.5387 181.423 56.1973 181.338 55.856C181.338 55.5147 181.338 55.1733 181.338 54.832C181.338 54.32 181.338 53.8507 181.338 53.424C181.423 52.912 181.508 52.4427 181.594 52.016C181.679 51.504 181.892 50.992 182.234 50.48C182.575 49.968 182.916 49.712 183.258 49.712C183.77 49.712 184.068 50.224 184.154 51.248C184.239 51.504 184.324 51.8027 184.41 52.144C184.495 52.4853 184.58 52.8267 184.666 53.168C185.775 51.888 187.14 50.3093 188.762 48.432C190.468 46.5547 192.218 44.7627 194.01 43.056C195.802 41.3493 197.423 40.1547 198.874 39.472C200.068 38.8747 201.263 38.576 202.458 38.576C203.652 38.576 204.634 38.8747 205.402 39.472C206.17 39.984 206.554 40.624 206.554 41.392C206.554 42.5867 205.658 43.6107 203.866 44.464C202.5 45.0613 200.666 45.9147 198.362 47.024C196.143 48.1333 193.839 49.456 191.45 50.992C189.06 52.528 187.012 54.192 185.306 55.984C186.586 60.5067 187.823 64.3893 189.018 67.632C190.298 70.8747 191.791 73.9893 193.498 76.976C195.29 79.8773 197.636 83.1627 200.538 86.832C202.5 89.0507 204.506 90.8427 206.554 92.208C208.602 93.5733 210.436 94.256 212.058 94.256C213.508 94.256 214.49 93.9147 215.002 93.232C215.599 92.6347 215.898 91.8667 215.898 90.928C215.898 89.8187 215.599 88.5813 215.002 87.216C214.49 85.936 213.935 84.8693 213.338 84.016C212.911 83.504 212.698 83.0347 212.698 82.608C212.698 82.352 212.868 82.224 213.21 82.224C213.978 82.224 214.788 82.5653 215.642 83.248C216.068 83.76 216.623 84.7413 217.306 86.192C218.074 87.728 218.458 89.0507 218.458 90.16C218.458 91.8667 217.86 93.2747 216.666 94.384C215.471 95.5787 214.106 96.432 212.57 96.944C211.034 97.456 209.711 97.712 208.602 97.712ZM183.514 40.368C187.183 38.7467 190.895 36.528 194.65 33.712C198.404 30.896 201.903 27.568 205.146 23.728C205.572 23.216 206.298 22.2773 207.322 20.912C208.346 19.4613 209.455 17.84 210.65 16.048C211.93 14.256 212.996 12.464 213.85 10.672C214.703 8.87999 215.13 7.38666 215.13 6.19199C215.13 5.33866 214.874 4.74133 214.362 4.39999C214.106 4.144 213.722 4.016 213.21 4.016C211.844 4.016 210.266 4.74133 208.474 6.19199C202.756 10.6293 197.978 15.6213 194.138 21.168C190.383 26.6293 186.842 33.0293 183.514 40.368Z"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        strokeWidth="2"
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Signature;
