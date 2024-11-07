import Text from '../../animations/animate-text/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faXTwitter, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { Flex, Button } from 'antd';
import { DownloadOutlined , ArrowRightOutlined} from '@ant-design/icons';
import cv from '../../../images/cv.pdf';
import { useState } from 'react';
import './app.css';

const ProfileIntroCard = ({changeTab}) => {
    const [size, setSize] = useState('24px');
    return (
        <div className="card">
            <div className="cover-img"> </div>
            <div className="profile-img"> </div>

            <div className="intro">
                <h1 className="text-white font-medium text-4xl">Ruhama Gull</h1>
                <Text />

                <Flex gap="middle" className="social-icons">
                    <a href='https://www.linkedin.com/in/ruhama-malik-116b61228' target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} /></a>
                    <a href='https://github.com/RuhamaMalik' target='_blank'> <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} /></a>
                    <a href='https://www.linkedin.com/in/your-linkedin-profile' target='_blank'>  <FontAwesomeIcon icon={faXTwitter} style={{ color: 'white' }} /></a>
                    <a href='https://twitter.com/RuhamaMalik722' target='_blank'> <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} /></a>
                </Flex>
            </div>

            <div className="card-footer">
                <Flex>

 
                    <a href={cv} download style={{ width: '50%' }}>
                        <Button className='btn' >
                            Download Cv <DownloadOutlined  style={{ fontSize: '18px'}} />
                        </Button>
                    </a>
                    <a style={{ width: '50%' }}> <Button onClick={()=>changeTab("4")} className='btn'>Contact me <ArrowRightOutlined  style={{ fontSize: '18px'}}/></Button></a>
                </Flex>
            </div>
        </div>
    )
}

export default ProfileIntroCard
