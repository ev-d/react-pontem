const Cube = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="64" fill="none" viewBox="0 0 59 64">
      <g clipPath="url(#CubeA)">
        <path fill="url(#CubeB)" d="M59 15.969 29.5 31.938 0 15.968 29.5 0 59 15.969Z"/>
        <path fill="url(#CubeC)" d="M59 47.899 29.5 63.868v-31.93L59 15.968v31.93Z"/>
        <path fill="url(#CubeD)" d="M29.5 63.868 0 47.898v-31.93l29.5 15.97v31.93Z"/>
        <path fill="#3F75EA" d="m29.885 32.307-.385 31.56v-31.93l.385.37Z"/>
        <path fill="url(#CubeE)" d="M59 15.969 29.5 31.938l.385.37L59 15.967Z"/>
        <path fill="#3F75EA" d="M29.5 31.938 0 15.968l28.95 16.34.55 31.56v-31.93Z" opacity=".76"/>
        <path fill="url(#CubeF)" d="m0 15.969 28.95 16.338.55 31.56L0 47.908V15.969Z" opacity=".44"/>
      </g>
      <defs>
        <linearGradient id="CubeB" x1="-7.303" x2="50.828" y1="-5.08" y2="28.081" gradientUnits="userSpaceOnUse">
          <stop offset=".323" stopColor="#2E074F"/>
          <stop offset=".441" stopColor="#330A55"/>
          <stop offset=".593" stopColor="#421465"/>
          <stop offset=".764" stopColor="#5B2480"/>
          <stop offset=".856" stopColor="#6B2F91"/>
        </linearGradient>
        <linearGradient id="CubeC" x1="31.741" x2="61.571" y1="59.365" y2="13.117" gradientUnits="userSpaceOnUse">
          <stop offset=".016" stopColor="#253E81"/>
          <stop offset=".434" stopColor="#6B2F91"/>
          <stop offset=".511" stopColor="#713090"/>
          <stop offset=".615" stopColor="#83328C"/>
          <stop offset=".734" stopColor="#9F3587"/>
          <stop offset=".865" stopColor="#C73A7F"/>
          <stop offset=".98" stopColor="#F03F77"/>
        </linearGradient>
        <linearGradient id="CubeD" x1="24.057" x2="-24.315" y1="31.624" y2="74.63" gradientUnits="userSpaceOnUse">
          <stop offset=".082" stopColor="#2E074F"/>
          <stop offset=".232" stopColor="#280648"/>
          <stop offset=".447" stopColor="#190536"/>
          <stop offset=".661" stopColor="#03031C"/>
        </linearGradient>
        <linearGradient id="CubeE" x1="33.1" x2="59.432" y1="30.225" y2="15.603" gradientUnits="userSpaceOnUse">
          <stop offset=".146" stopColor="#3F75EA"/>
          <stop offset=".967" stopColor="#6B2F91" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="CubeF" x1="-11.117" x2="27.017" y1="57.348" y2="31.721" gradientUnits="userSpaceOnUse">
          <stop offset=".274" stopColor="#AD3784"/>
          <stop offset=".42" stopColor="#952E79" stopOpacity=".778"/>
          <stop offset=".727" stopColor="#56175D" stopOpacity=".312"/>
          <stop offset=".933" stopColor="#290749" stopOpacity="0"/>
        </linearGradient>
        <clipPath id="CubeA">
          <path fill="#fff" d="M0 0h59v64H0z"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Cube;
