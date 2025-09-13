import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getMe } from "../util/getMe";
import {
  Header,
  Nav,
  NavLink,
  Section,
  Row,
  Avatar,
  Button,
  Grid,
  Card,
  Panel,
  Footer,
} from "./My.styled";
import { BasicBase, MainSection, Spacer } from "../style/common.styled";

const USER = "user";

type MeResponse = {
  usernameOrEmail: string;
  username: string;
  email: string;
  role: string;
};

const My = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [me, setMe] = useState<MeResponse | null>(null);

  useEffect(() => { 
    const fetchMe = async () => { 
      const token = localStorage.getItem(USER); // 토큰 가져오기 
      // console.log(token); 
      try { const data = await getMe(token ?? ''); 
        setMe(data); 
      } catch (err: any) { } }; 
    fetchMe(); 
  }, []);

  const handleLogOut = () => {
    logOut();
    navigate("/static/login");
  };



  return (
    <BasicBase>
      <Spacer h={48}/>
      <MainSection>
        {/* 프로필 */}
        <Section>
          <Row>
            <Avatar />
            <div>
              <h1>{me?.username || me?.usernameOrEmail || "사용자"}</h1>
              <div style={{ color: "#666" }}>{me?.email || ""}</div>
              <div style={{ marginTop: 8 }}>
                <Button>프로필 수정</Button>
                <Button onClick={handleLogOut}>로그아웃</Button>
              </div>
            </div>
          </Row>
        </Section>

        {/* 찜한 타이틀 */}
        <Section>
          <h2>찜한 타이틀</h2>
          <Grid>
            {[...Array(5)].map((_, i) => (
              <Card key={i}>카드</Card>
            ))}
          </Grid>
        </Section>

        {/* 최근 본/구매한 타이틀 */}
        <Section>
          <h2>최근 본/구매한 타이틀</h2>
          <Panel>목록/타임라인 영역</Panel>
        </Section>

        {/* 설정 */}
        <Section>
          <h2>설정</h2>
          <Panel>알림, 추천 선호도, 개인정보 설정</Panel>
        </Section>
      </MainSection>

      <Footer>© 2025 Blu-ray Recommender</Footer>
    </BasicBase>
  );
};

export default My;
