import type { RouteMetaData } from "@/types/Routes";

//랜딩 페이지
import LandingPage from "@/pages/landing";
//메인 페이지
import ForrestContainer from "@/pages/forrest/ForrestContainer";
import ForrestMain from "@/pages/forrest/main/index";
import AboutUs from "@/pages/forrest/aboutus/index";
import Works from "@/pages/forrest/works/index";
import Contacts from "@/pages/forrest/contacts/index";

export const PageRouters: RouteMetaData[] = [
  {
    path: "/",
    element: LandingPage,
    id: "00",
    linkName: "랜딩 페이지",
  },
  {
    path: "/forrest",
    element: ForrestContainer,
    id: "01",
    linkName: "포레스트",
    childElements: [
      {
        path: "",
        element: ForrestMain,
        id: "01_00",
        linkName: "메인",
      },
      {
        path: "aboutus",
        element: AboutUs,
        id: "01_01",
        linkName: "소개",
      },
      {
        path: "works",
        element: Works,
        id: "01_02",
        linkName: "포트폴리오",
      },
      {
        path: "contacts",
        element: Contacts,
        id: "01_03",
        linkName: "포트폴리오",
      },
    ],
  },
];
