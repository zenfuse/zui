import React from "react";

const LogoWithTitle = ({ className }) => {
  return (
    <svg
      viewBox="0 0 117 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.6762 9.23928H19.561C19.2884 9.2317 19.0181 9.29103 18.7734 9.41214C18.5286 9.53325 18.3169 9.7125 18.1564 9.9344L15.307 13.6061L13.3632 6.34261C13.2749 6.04887 13.1039 5.7872 12.8708 5.58928C12.6377 5.39135 12.2958 5.26567 11.9932 5.22743C11.3486 5.12707 10.8116 5.35047 10.4071 5.86809L3.80654 14.3765C3.80654 14.3765 3.77 14.4174 3.74537 14.4293C3.72073 14.4412 3.66617 14.4444 3.66617 14.4444H0.229594C0.0789773 13.6801 0 12.8899 0 12.0811C0 5.40888 5.37488 0 12.0051 0C17.6627 0 22.4062 3.93831 23.6762 9.23928Z"
        fill="#0065FF"
      />
      <path
        d="M24 12.5848H20.4548C20.4301 12.5827 20.4053 12.5875 20.383 12.5984C20.3608 12.6094 20.3419 12.6262 20.3283 12.6471L15.9456 18.2833C15.7758 18.5084 15.552 18.6865 15.2952 18.801C15.0384 18.9155 14.757 18.9627 14.4772 18.9381C14.1974 18.9135 13.9284 18.818 13.6952 18.6604C13.462 18.5028 13.2723 18.2884 13.1438 18.0371C13.0553 17.8428 12.9863 17.6402 12.9379 17.4321C12.4552 15.6974 11.0956 10.5544 11.0956 10.5544L5.97493 17.1375C5.81986 17.3446 5.61806 17.5116 5.38619 17.6247C5.15433 17.7378 4.89905 17.7938 4.64144 17.788H1.42127C3.44575 21.5822 7.42604 24.1621 12.0051 24.1621C18.4677 24.1621 23.7376 19.0234 24 12.5848Z"
        fill="#0065FF"
      />
      <path
        d="M34.5238 19.2604C34.3783 19.2604 34.2546 19.2091 34.1528 19.1066C34.0509 19.004 34 18.8795 34 18.733V17.4586C34 17.3267 34.0218 17.2095 34.0655 17.107C34.1237 17.0044 34.2037 16.8799 34.3056 16.7334L39.8712 10.1634H34.6984C34.5529 10.1634 34.4292 10.1121 34.3274 10.0095C34.2255 9.89235 34.1746 9.76051 34.1746 9.61402V8.36153C34.1746 8.21504 34.2255 8.09053 34.3274 7.98798C34.4292 7.88544 34.5529 7.83417 34.6984 7.83417H43.0142C43.1597 7.83417 43.2834 7.88544 43.3852 7.98798C43.4871 8.09053 43.538 8.21504 43.538 8.36153V9.72389C43.538 9.84108 43.5016 9.95827 43.4289 10.0755C43.3707 10.1927 43.3052 10.3025 43.2324 10.4051L37.7759 16.9312H43.4507C43.5962 16.9312 43.7199 16.9825 43.8217 17.085C43.9236 17.1876 43.9745 17.3194 43.9745 17.4805V18.733C43.9745 18.8795 43.9236 19.004 43.8217 19.1066C43.7344 19.2091 43.6107 19.2604 43.4507 19.2604H34.5238Z"
        fill="#161616"
      />
      <path
        d="M50.9669 19.4801C49.3372 19.4801 48.0422 19.0114 47.0818 18.0738C46.136 17.1363 45.634 15.8032 45.5758 14.0746L45.554 13.5253C45.554 11.6942 46.0269 10.2513 46.9727 9.19652C47.933 8.1418 49.2572 7.61443 50.945 7.61443C52.6766 7.61443 54.0079 8.1418 54.9392 9.19652C55.885 10.2513 56.3579 11.6576 56.3579 13.4154V13.8769C56.3579 14.0234 56.307 14.1479 56.2051 14.2504C56.1033 14.353 55.9723 14.4042 55.8122 14.4042H48.566V14.58C48.5951 15.4004 48.8134 16.0816 49.2208 16.6236C49.6427 17.1509 50.2175 17.4146 50.945 17.4146C51.7744 17.4146 52.451 17.0777 52.9748 16.4038C53.1058 16.2427 53.2077 16.1475 53.2804 16.1182C53.3532 16.0742 53.4769 16.0523 53.6515 16.0523H55.5722C55.7031 16.0523 55.8122 16.0889 55.8995 16.1621C56.0014 16.2354 56.0523 16.3379 56.0523 16.4698C56.0523 16.8213 55.8413 17.2388 55.4194 17.7222C55.012 18.191 54.4226 18.6012 53.6515 18.9528C52.8803 19.3043 51.9854 19.4801 50.9669 19.4801ZM53.3459 12.5365V12.4925C53.3459 11.6283 53.1276 10.9398 52.6911 10.427C52.2691 9.89968 51.6871 9.636 50.945 9.636C50.2029 9.636 49.6209 9.89968 49.1989 10.427C48.777 10.9398 48.566 11.6283 48.566 12.4925V12.5365H53.3459Z"
        fill="#161616"
      />
      <path
        d="M59.198 19.2604C59.0525 19.2604 58.9288 19.2091 58.827 19.1066C58.7251 19.004 58.6742 18.8795 58.6742 18.733V8.36153C58.6742 8.20039 58.7251 8.07588 58.827 7.98798C58.9288 7.88544 59.0525 7.83417 59.198 7.83417H61.0096C61.1696 7.83417 61.2933 7.88544 61.3806 7.98798C61.4825 8.07588 61.5334 8.20039 61.5334 8.36153V9.26245C62.421 8.16377 63.636 7.61443 65.1783 7.61443C66.517 7.61443 67.5792 8.0539 68.3649 8.93284C69.1507 9.81178 69.5436 11.0203 69.5436 12.5585V18.733C69.5436 18.8795 69.4926 19.004 69.3908 19.1066C69.3035 19.2091 69.1798 19.2604 69.0197 19.2604H67.0554C66.9099 19.2604 66.7862 19.2091 66.6843 19.1066C66.5825 19.004 66.5316 18.8795 66.5316 18.733V12.6903C66.5316 11.8407 66.3206 11.1815 65.8986 10.7127C65.4912 10.2293 64.9019 9.98757 64.1307 9.98757C63.3886 9.98757 62.792 10.2293 62.341 10.7127C61.8899 11.1961 61.6644 11.8553 61.6644 12.6903V18.733C61.6644 18.8795 61.6134 19.004 61.5116 19.1066C61.4243 19.2091 61.3006 19.2604 61.1405 19.2604H59.198Z"
        fill="#161616"
      />
      <path
        d="M73.9123 19.2604C73.7668 19.2604 73.6432 19.2091 73.5413 19.1066C73.4394 19.004 73.3885 18.8795 73.3885 18.733V10.1853H71.6206C71.4751 10.1853 71.3514 10.1341 71.2496 10.0315C71.1477 9.92897 71.0968 9.80446 71.0968 9.65797V8.36153C71.0968 8.21504 71.1477 8.09053 71.2496 7.98798C71.3514 7.88544 71.4751 7.83417 71.6206 7.83417H73.3885V6.95523C73.3885 5.62217 73.745 4.63336 74.458 3.98881C75.171 3.3296 76.2477 3 77.6882 3H79.1943C79.3398 3 79.4634 3.05127 79.5653 3.15381C79.6671 3.25636 79.7181 3.38087 79.7181 3.52736V4.8238C79.7181 4.97029 79.6671 5.09481 79.5653 5.19735C79.4634 5.29989 79.3398 5.35116 79.1943 5.35116H77.7974C77.2299 5.35116 76.8298 5.49033 76.5969 5.76866C76.3641 6.04699 76.2477 6.47914 76.2477 7.0651V7.83417H78.976C79.1215 7.83417 79.2452 7.88544 79.347 7.98798C79.4489 8.09053 79.4998 8.21504 79.4998 8.36153V9.65797C79.4998 9.80446 79.4489 9.92897 79.347 10.0315C79.2452 10.1341 79.1215 10.1853 78.976 10.1853H76.2477V18.733C76.2477 18.8795 76.1968 19.004 76.0949 19.1066C76.0076 19.2091 75.884 19.2604 75.7239 19.2604H73.9123Z"
        fill="#161616"
      />
      <path
        d="M85.4374 19.4801C84.0987 19.4801 83.0438 19.0406 82.2726 18.1617C81.5014 17.2828 81.1158 16.0742 81.1158 14.5361V8.36153C81.1158 8.20039 81.1667 8.07588 81.2686 7.98798C81.3704 7.88544 81.4941 7.83417 81.6396 7.83417H83.604C83.7495 7.83417 83.8731 7.88544 83.975 7.98798C84.0769 8.09053 84.1278 8.21504 84.1278 8.36153V14.4042C84.1278 16.2061 84.9063 17.107 86.4632 17.107C87.2198 17.107 87.8164 16.8653 88.2529 16.3819C88.704 15.8984 88.9295 15.2392 88.9295 14.4042V8.36153C88.9295 8.20039 88.9805 8.07588 89.0823 7.98798C89.1842 7.88544 89.3078 7.83417 89.4533 7.83417H91.3959C91.5559 7.83417 91.6796 7.88544 91.7669 7.98798C91.8688 8.07588 91.9197 8.20039 91.9197 8.36153V18.733C91.9197 18.8795 91.8688 19.004 91.7669 19.1066C91.6796 19.2091 91.5559 19.2604 91.3959 19.2604H89.5843C89.4388 19.2604 89.3151 19.2091 89.2133 19.1066C89.1114 19.004 89.0605 18.8795 89.0605 18.733V17.8321C88.2602 18.9308 87.0525 19.4801 85.4374 19.4801Z"
        fill="#161616"
      />
      <path
        d="M99.1238 19.4801C98.018 19.4801 97.094 19.3117 96.3519 18.9747C95.6098 18.6378 95.0569 18.2496 94.6931 17.8101C94.3439 17.356 94.1693 16.9678 94.1693 16.6455C94.1693 16.499 94.213 16.3819 94.3003 16.294C94.4021 16.2061 94.5185 16.1621 94.6495 16.1621H96.4392C96.5556 16.1621 96.6575 16.2207 96.7448 16.3379C96.8175 16.3965 96.9776 16.5357 97.225 16.7554C97.4869 16.9751 97.7779 17.1509 98.098 17.2828C98.4327 17.4 98.7964 17.4586 99.1893 17.4586C99.7713 17.4586 100.244 17.3487 100.608 17.129C100.972 16.8946 101.154 16.565 101.154 16.1401C101.154 15.8472 101.066 15.6128 100.892 15.437C100.732 15.2466 100.433 15.0781 99.9969 14.9316C99.5749 14.7705 98.9347 14.5947 98.0762 14.4042C96.8394 14.1406 95.9227 13.7377 95.3261 13.1957C94.7441 12.6537 94.453 11.9359 94.453 11.0423C94.453 10.4563 94.6277 9.907 94.9769 9.39429C95.3261 8.86692 95.8426 8.4421 96.5265 8.11982C97.225 7.7829 98.0543 7.61443 99.0147 7.61443C100.004 7.61443 100.855 7.77557 101.568 8.09785C102.281 8.40548 102.82 8.77903 103.183 9.2185C103.562 9.65797 103.751 10.0462 103.751 10.3831C103.751 10.5149 103.7 10.6321 103.598 10.7347C103.511 10.8226 103.402 10.8665 103.271 10.8665H101.634C101.474 10.8665 101.35 10.8079 101.263 10.6907C101.161 10.6175 100.994 10.4856 100.761 10.2952C100.543 10.0901 100.295 9.92897 100.019 9.81178C99.7422 9.69459 99.4076 9.636 99.0147 9.636C98.4763 9.636 98.0616 9.75319 97.7706 9.98757C97.4796 10.222 97.3341 10.5296 97.3341 10.9105C97.3341 11.1741 97.3996 11.3939 97.5305 11.5697C97.676 11.7455 97.9598 11.9139 98.3817 12.0751C98.8037 12.2215 99.4367 12.3754 100.281 12.5365C102.9 13.0492 104.209 14.1992 104.209 15.9863C104.209 17.0264 103.758 17.8687 102.856 18.5133C101.968 19.1578 100.724 19.4801 99.1238 19.4801Z"
        fill="#161616"
      />
      <path
        d="M111.351 19.4801C109.721 19.4801 108.426 19.0114 107.466 18.0738C106.52 17.1363 106.018 15.8032 105.96 14.0746L105.938 13.5253C105.938 11.6942 106.411 10.2513 107.357 9.19652C108.317 8.1418 109.641 7.61443 111.329 7.61443C113.061 7.61443 114.392 8.1418 115.323 9.19652C116.269 10.2513 116.742 11.6576 116.742 13.4154V13.8769C116.742 14.0234 116.691 14.1479 116.589 14.2504C116.487 14.353 116.356 14.4042 116.196 14.4042H108.95V14.58C108.979 15.4004 109.197 16.0816 109.605 16.6236C110.027 17.1509 110.601 17.4146 111.329 17.4146C112.158 17.4146 112.835 17.0777 113.359 16.4038C113.49 16.2427 113.592 16.1475 113.664 16.1182C113.737 16.0742 113.861 16.0523 114.035 16.0523H115.956C116.087 16.0523 116.196 16.0889 116.284 16.1621C116.385 16.2354 116.436 16.3379 116.436 16.4698C116.436 16.8213 116.225 17.2388 115.803 17.7222C115.396 18.191 114.807 18.6012 114.035 18.9528C113.264 19.3043 112.369 19.4801 111.351 19.4801ZM113.73 12.5365V12.4925C113.73 11.6283 113.512 10.9398 113.075 10.427C112.653 9.89968 112.071 9.636 111.329 9.636C110.587 9.636 110.005 9.89968 109.583 10.427C109.161 10.9398 108.95 11.6283 108.95 12.4925V12.5365H113.73Z"
        fill="#161616"
      />
    </svg>
  );
};

export default LogoWithTitle;