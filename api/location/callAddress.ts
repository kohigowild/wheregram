import axios from 'axios';

export const callAddress = async (lng: number, lat: number, setState: React.Dispatch<React.SetStateAction<string>>) => {
  try {
    await axios
      .get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lng}&y=${lat}`, {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
        },
      })
      .then((res) => {
        const location = res.data.documents[0];
        setState(location.address_name);
      });
  } catch (error) {
    console.log(error);
  }
};
