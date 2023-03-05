import React from "react";
import { motion } from "framer-motion";
const Signature = () => {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 8,
        ease: "linear",
      },
    },
  };

  return (
    <svg width="193" height="98" viewBox="fill">
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M29.0295 97.104C25.2748 97.104 23.3975 95.184 23.3975 91.344C23.3975 88.6133 24.2082 85.2 25.8295 81.104C27.4508 76.9227 29.6268 72.3573 32.3575 67.408C35.0882 62.4587 38.0748 57.424 41.3175 52.304C44.5602 47.0987 47.8455 42.064 51.1735 37.2C54.5015 32.336 57.5735 27.9413 60.3895 24.016C63.2908 20.0907 65.6802 16.9333 67.5575 14.544C67.4722 13.6053 67.7708 12.7093 68.4535 11.856C69.2215 11.0027 69.8615 10.2773 70.3735 9.68C67.3868 9.50933 64.3575 9.38133 61.2855 9.296C58.2135 9.12533 55.1842 9.03999 52.1975 9.03999C50.6615 9.03999 48.4002 9.08266 45.4135 9.168C42.4268 9.25333 39.0988 9.46666 35.4295 9.808C31.8455 10.064 28.2188 10.5333 24.5495 11.216C20.8802 11.8133 17.4668 12.7093 14.3095 13.904C11.2375 15.0133 8.76283 16.464 6.8855 18.256C5.00817 19.9627 4.0695 22.0533 4.0695 24.528C4.0695 27.5147 4.92283 30.288 6.6295 32.848C8.4215 35.3227 10.5975 37.4987 13.1575 39.376C15.8028 41.2533 18.3628 42.7467 20.8375 43.856C21.0935 43.9413 21.4775 44.1547 21.9895 44.496C22.5868 44.752 22.8855 45.0507 22.8855 45.392C22.8855 45.5627 22.8002 45.6907 22.6295 45.776C22.4588 45.776 22.3308 45.776 22.2455 45.776C21.9042 45.776 21.5202 45.7333 21.0935 45.648C20.7522 45.4773 20.3682 45.3493 19.9415 45.264C17.2108 44.3253 14.3522 43.0453 11.3655 41.424C8.37883 39.7173 5.8615 37.6267 3.8135 35.152C1.7655 32.592 0.7415 29.648 0.7415 26.32C0.7415 25.04 0.954834 23.6747 1.3815 22.224C2.6615 18.128 4.7095 14.8427 7.5255 12.368C10.4268 9.808 13.7548 7.84533 17.5095 6.48C21.3495 5.11466 25.2748 4.21867 29.2855 3.792C33.3815 3.28 37.2642 3.02399 40.9335 3.02399C46.3095 3.02399 51.6428 3.40799 56.9335 4.17599C62.2242 4.85866 67.5148 5.66933 72.8055 6.60799C73.2322 6.01066 73.6588 5.37066 74.0855 4.688C74.5975 4.00533 75.1095 3.40799 75.6215 2.896C76.3042 2.21333 77.3708 1.70133 78.8215 1.35999C80.2722 1.01866 81.4242 0.848 82.2775 0.848C82.6188 0.848 83.1308 0.933332 83.8135 1.104C84.4962 1.18933 84.8375 1.488 84.8375 2C84.8375 2.17066 84.4962 2.68266 83.8135 3.536C83.1308 4.38933 82.4055 5.24266 81.6375 6.09599C80.9548 6.94933 80.4855 7.504 80.2295 7.75999C85.0935 8.52799 90.0002 9.25333 94.9495 9.936C99.9842 10.5333 104.976 10.832 109.926 10.832C111.376 10.832 112.486 10.5333 113.254 9.936C114.107 9.33866 114.747 8.78399 115.174 8.272C115.686 7.67466 116.198 7.376 116.71 7.376C117.307 7.376 117.862 7.67466 118.374 8.272C118.886 8.78399 119.142 9.33866 119.142 9.936C119.142 10.3627 119.014 10.704 118.758 10.96C118.502 11.1307 118.203 11.3013 117.862 11.472C115.046 12.8373 112.699 14.9707 110.822 17.872C108.944 20.7733 107.152 23.4613 105.446 25.936C105.275 26.192 104.976 26.6187 104.55 27.216C104.123 27.728 103.739 27.984 103.398 27.984C103.142 27.984 103.014 27.7707 103.014 27.344C103.014 26.2347 103.398 24.9547 104.166 23.504C105.019 21.968 105.83 20.4747 106.598 19.024C107.366 17.488 107.75 16.2507 107.75 15.312C107.75 14.8 107.494 14.5013 106.982 14.416C105.616 13.9893 104.166 13.648 102.63 13.392C101.179 13.136 99.7282 12.88 98.2775 12.624C94.8642 12.112 91.4935 11.6853 88.1655 11.344C84.8375 10.9173 81.4668 10.5333 78.0535 10.192C73.9575 15.056 69.6482 20.4747 65.1255 26.448C60.6028 32.336 56.1655 38.5227 51.8135 45.008C47.5468 51.4933 43.7068 58.0213 40.2935 64.592C36.9655 71.1627 34.4055 77.4773 32.6135 83.536C32.2722 84.6453 31.9735 85.84 31.7175 87.12C31.4615 88.4853 31.3335 89.7653 31.3335 90.96C31.3335 91.728 31.4615 92.5387 31.7175 93.392C31.9735 94.2453 32.5708 94.672 33.5095 94.672C34.1922 94.672 34.8748 94.544 35.5575 94.288C36.3255 94.1173 37.0935 94.032 37.8615 94.032C37.9468 94.032 38.1175 94.032 38.3735 94.032C38.6295 94.032 38.7575 94.1173 38.7575 94.288C38.7575 94.6293 38.0322 95.0133 36.5815 95.44C35.2162 95.952 33.7228 96.336 32.1015 96.592C30.5655 96.9333 29.5415 97.104 29.0295 97.104ZM81.7235 40.528C81.4675 40.528 81.2968 40.2293 81.2115 39.632C81.2115 38.9493 81.2115 38.5227 81.2115 38.352C81.2115 38.096 81.2542 37.5413 81.3395 36.688C81.4248 35.8347 81.6808 35.3653 82.1075 35.28C83.3022 35.1093 84.4968 34.896 85.6915 34.64C86.8862 34.384 88.0808 34.0853 89.2755 33.744C89.4462 33.6587 89.7022 33.616 90.0435 33.616C90.4702 33.616 90.6835 33.8293 90.6835 34.256C90.6835 35.1947 90.0862 36.176 88.8915 37.2C87.7822 38.1387 86.5022 38.9493 85.0515 39.632C83.6862 40.2293 82.5768 40.528 81.7235 40.528ZM71.3555 82C67.1742 82 65.0835 79.8667 65.0835 75.6C65.0835 73.808 65.3395 71.9733 65.8515 70.096C66.4488 68.2187 67.0888 66.4693 67.7715 64.848C68.5395 62.9707 69.3928 61.136 70.3315 59.344C71.2702 57.552 72.2088 55.76 73.1475 53.968C73.5742 53.2 73.9582 52.432 74.2995 51.664C74.7262 50.8107 75.1528 50 75.5795 49.232C76.0062 48.6347 76.8168 48.1227 78.0115 47.696C79.2062 47.2693 80.1448 47.056 80.8275 47.056C80.9128 47.056 80.9128 47.0987 80.8275 47.184C80.7422 47.184 80.6995 47.184 80.6995 47.184C80.7848 47.184 80.8275 47.2267 80.8275 47.312C80.9982 47.1413 81.2115 47.056 81.4675 47.056C81.8088 47.056 82.0222 47.2267 82.1075 47.568C82.1928 47.824 82.2355 48.08 82.2355 48.336C82.2355 48.9333 81.9795 49.8293 81.4675 51.024C81.0408 52.2187 80.4862 53.3707 79.8035 54.48C79.2062 55.504 78.6088 56.144 78.0115 56.4C77.2435 58.192 76.2195 60.1547 74.9395 62.288C73.7448 64.4213 72.6355 66.5973 71.6115 68.816C70.5875 70.9493 70.0755 73.04 70.0755 75.088C70.0755 77.4773 71.3555 78.672 73.9155 78.672C75.1102 78.672 76.3902 78.288 77.7555 77.52C79.2062 76.752 80.6142 75.856 81.9795 74.832C83.3448 73.7227 84.4968 72.784 85.4355 72.016C86.4595 71.248 87.0995 70.864 87.3555 70.864C87.4408 70.864 87.4835 70.9067 87.4835 70.992C87.4835 71.3333 87.3555 71.7173 87.0995 72.144C86.8435 72.4853 86.6302 72.7413 86.4595 72.912C85.4355 74.2773 84.0702 75.6853 82.3635 77.136C80.6568 78.5013 78.8222 79.6533 76.8595 80.592C74.9822 81.5307 73.1475 82 71.3555 82ZM88.0725 82.256C85.6832 82.256 84.4885 81.0187 84.4885 78.544C84.4885 77.4347 84.6592 76.24 85.0005 74.96C85.4272 73.68 85.8112 72.528 86.1525 71.504C88.4565 65.5307 91.2725 59.3013 94.6005 52.816C97.9285 46.2453 101.47 39.8453 105.225 33.616C108.979 27.3013 112.649 21.4987 116.233 16.208C116.062 15.5253 115.977 14.928 115.977 14.416C115.977 13.9893 116.019 13.648 116.104 13.392C116.361 13.0507 116.83 12.3253 117.513 11.216C118.195 10.1067 118.878 9.04 119.561 8.016C120.329 6.90666 120.798 6.26666 120.969 6.09599C121.395 5.58399 122.206 5.19999 123.401 4.94399C124.681 4.688 125.662 4.56 126.345 4.56C126.771 4.56 127.411 4.64533 128.265 4.81599C129.203 4.90133 129.673 5.24266 129.673 5.84C129.673 6.096 129.63 6.224 129.545 6.224C128.179 8.18667 126.771 10.192 125.321 12.24C123.955 14.2027 122.59 16.1653 121.225 18.128C116.275 25.552 111.625 33.1467 107.273 40.912C103.006 48.592 98.9098 56.4 94.9845 64.336C94.2165 65.7867 93.3632 67.6213 92.4245 69.84C91.5712 72.0587 91.1445 73.9787 91.1445 75.6C91.1445 77.2213 91.7845 78.032 93.0645 78.032C94.1738 78.032 95.4112 77.648 96.7765 76.88C98.1418 76.112 99.4218 75.2587 100.617 74.32C101.897 73.296 102.963 72.4 103.817 71.632C104.755 70.864 105.353 70.48 105.609 70.48C105.779 70.48 105.865 70.6507 105.865 70.992C105.865 71.3333 105.694 71.8027 105.353 72.4C105.097 72.912 104.841 73.3387 104.585 73.68C103.049 75.472 100.873 77.1787 98.0565 78.8C95.2405 80.4213 92.7232 81.488 90.5045 82C90.1632 82.0853 89.7792 82.128 89.3525 82.128C88.9258 82.2133 88.4992 82.256 88.0725 82.256ZM135.402 83.024C133.098 83.024 131.562 82.128 130.794 80.336C130.026 78.4587 129.642 76.5813 129.642 74.704C129.642 72.5707 129.812 70.4373 130.154 68.304C130.495 66.1707 130.879 64.08 131.306 62.032C130.452 63.4827 129.087 65.36 127.21 67.664C125.332 69.968 123.242 72.3147 120.938 74.704C118.634 77.008 116.287 78.9707 113.898 80.592C111.594 82.128 109.546 82.896 107.754 82.896C106.73 82.896 106.047 82.5547 105.706 81.872C105.45 81.1893 105.322 80.4213 105.322 79.568C105.322 77.776 105.748 75.5147 106.602 72.784C107.455 70.0533 108.65 67.1947 110.186 64.208C111.722 61.136 113.428 58.32 115.306 55.76C117.268 53.2 119.274 51.152 121.322 49.616C123.455 47.9947 125.588 47.2693 127.722 47.44C128.66 46.928 129.684 46.4587 130.794 46.032C131.903 45.6053 133.012 45.392 134.122 45.392C134.975 45.392 135.828 45.4773 136.682 45.648C137.62 45.7333 138.516 45.8613 139.37 46.032C139.796 45.8613 140.266 45.6907 140.778 45.52C141.29 45.3493 141.802 45.264 142.314 45.264C143.252 45.264 143.722 45.6907 143.722 46.544C143.722 46.9707 143.466 47.824 142.954 49.104C142.527 50.2987 142.015 51.4507 141.418 52.56C140.906 53.584 140.479 54.1813 140.138 54.352C139.37 55.888 138.644 57.8933 137.962 60.368C137.279 62.7573 136.724 65.232 136.298 67.792C135.871 70.352 135.658 72.528 135.658 74.32C135.658 75.2587 135.786 76.3253 136.042 77.52C136.383 78.6293 137.194 79.184 138.474 79.184C139.924 79.184 141.375 78.6293 142.826 77.52C144.362 76.3253 145.684 75.1733 146.794 74.064C147.903 72.8693 148.543 72.272 148.714 72.272C148.884 72.272 148.97 72.3573 148.97 72.528C148.97 73.296 148.543 74.192 147.69 75.216C146.836 76.24 145.898 77.2213 144.874 78.16C143.85 79.0133 143.082 79.6533 142.569 80.08C141.546 80.848 140.394 81.5307 139.114 82.128C137.919 82.7253 136.682 83.024 135.402 83.024ZM112.234 78.544C112.66 78.544 113.172 78.3733 113.77 78.032C114.367 77.6053 114.836 77.264 115.178 77.008C120.298 73.3387 124.308 69.1147 127.21 64.336C130.111 59.5573 132.927 54.4373 135.658 48.976C135.316 48.8053 134.932 48.6773 134.506 48.592C134.079 48.5067 133.652 48.464 133.226 48.464C131.604 48.464 129.983 48.8907 128.362 49.744C126.826 50.5973 125.546 51.6213 124.522 52.816C122.9 54.5227 121.236 56.784 119.53 59.6C117.908 62.3307 116.415 65.1893 115.05 68.176C113.684 71.0773 112.66 73.68 111.978 75.984C111.892 76.24 111.807 76.496 111.722 76.752C111.636 77.008 111.594 77.3067 111.594 77.648C111.594 78.2453 111.807 78.544 112.234 78.544ZM145.684 83.92C145.172 83.92 144.916 83.7067 144.916 83.28C145.343 82.5973 145.77 81.9147 146.197 81.232C146.709 80.5493 147.135 79.9093 147.477 79.312C149.013 76.3253 150.506 73.3387 151.957 70.352C153.407 67.3653 154.943 64.4213 156.565 61.52C156.479 61.008 156.309 60.3253 156.053 59.472C155.882 58.6187 155.797 57.9787 155.797 57.552C155.797 56.4427 156.266 55.6747 157.205 55.248C158.143 54.736 158.997 54.3947 159.765 54.224C162.666 47.6533 165.695 41.168 168.853 34.768C172.095 28.368 175.637 22.1813 179.477 16.208C179.221 15.696 179.093 15.0987 179.093 14.416C179.093 14.2453 179.093 14.0747 179.093 13.904C179.178 13.7333 179.263 13.5627 179.349 13.392L184.085 6.09599C184.597 5.58399 185.45 5.19999 186.645 4.94399C187.925 4.688 188.906 4.56 189.589 4.56C189.93 4.56 190.57 4.64533 191.509 4.81599C192.447 4.90133 192.917 5.24266 192.917 5.84C192.917 5.92533 192.874 6.01066 192.789 6.09599C192.789 6.18133 192.789 6.224 192.789 6.224C191.935 7.58933 191.039 8.91199 190.101 10.192C189.162 11.472 188.223 12.752 187.285 14.032C183.871 19.152 180.629 24.4 177.557 29.776C174.485 35.0667 171.455 40.4 168.469 45.776C167.871 46.9707 167.018 48.592 165.909 50.64C164.885 52.6027 163.946 54.608 163.093 56.656C162.325 58.6187 161.941 60.2827 161.941 61.648V62.032C163.562 60.496 165.653 58.6187 168.213 56.4C170.858 54.096 173.503 51.8773 176.149 49.744C178.879 47.6107 181.141 46.0747 182.933 45.136C183.615 44.7947 184.383 44.624 185.237 44.624C185.578 44.624 186.005 44.7093 186.517 44.88C187.114 44.9653 187.413 45.264 187.413 45.776C187.413 46.3733 187.029 47.0133 186.261 47.696C185.493 48.3787 184.639 49.0187 183.701 49.616C182.762 50.128 182.079 50.512 181.653 50.768C178.495 52.6453 175.21 54.7787 171.797 57.168C168.383 59.472 165.311 61.8187 162.581 64.208C162.837 65.1467 163.263 66.4267 163.861 68.048C164.543 69.584 165.354 71.2053 166.293 72.912C167.231 74.5333 168.213 75.9413 169.237 77.136C170.346 78.2453 171.455 78.8 172.565 78.8C173.674 78.8 174.613 78.3733 175.381 77.52C176.234 76.5813 176.959 75.5573 177.557 74.448C178.239 73.2533 178.794 72.2293 179.221 71.376C179.647 70.4373 179.989 69.968 180.245 69.968C180.415 69.968 180.501 70.096 180.501 70.352C180.586 70.608 180.629 70.7787 180.629 70.864C180.629 71.12 180.543 71.504 180.373 72.016C179.861 73.552 179.263 75.1307 178.581 76.752C177.898 78.3733 176.959 79.7387 175.765 80.848C174.655 81.9573 173.119 82.512 171.157 82.512C169.109 82.512 167.231 81.616 165.525 79.824C163.903 77.9467 162.581 75.8133 161.557 73.424C160.533 70.9493 159.85 68.8587 159.509 67.152C158.399 68.432 157.333 69.7973 156.309 71.248C155.285 72.6987 154.303 74.1493 153.365 75.6C153.365 75.6853 153.365 75.8133 153.365 75.984C153.45 76.0693 153.493 76.1973 153.493 76.368C153.493 77.4773 153.066 78.6293 152.213 79.824C151.445 81.0187 150.463 82 149.269 82.768C148.074 83.536 146.879 83.92 145.684 83.92Z"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default Signature;
