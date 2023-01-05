import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserButton } from '../../../components/common/button';
import Card from '../../../components/common/dashboard/card';
import Header from '../../../components/common/dashboard/header';
import NavTabs from '../../../components/common/dashboard/navTabs';
import { useFetch } from '../../../hooks/useFetch';

const UserDetails = () => {
  // navigateion hook
  const navigate = useNavigate();
  const params = useParams();

  const { fetchData, fetchObj }: any = useFetch();

  useEffect(() => {
    fetchData(`users/${params.id}`);
  }, []);

  return (
    <>
    {!fetchObj.data ? (
      <div>
        No data available
      </div>
    ) : (
      <div className="user-details">
        <div
          className="back-navigation"
          onClick={() => navigate('/')}
        >
          <img src="/img/dashboard/icons/back.svg" alt="back" />
          <span>Back to Users</span>
        </div>
        <div className="user-header">
          <Header
            title="User Details"
          />
          <div className="buttons">
            <UserButton
              value="Blacklist User"
              color="danger"
            />
            <UserButton
              value="Activate User"
              color="success"
            />
          </div>
        </div>

        <Card>
          <div className="user-banner">
            <div className="left-side">
              <div className={fetchObj?.data.profile.avatar ? 'image-container-alt' : 'image-container'}>
                <img src={fetchObj?.data.profile.avatar ? fetchObj?.data.profile.avatar : '/img/dashboard/icons/user-outline.svg'} />
              </div>
              <div className="alias">
                <p>{fetchObj?.data.profile.firstName} {fetchObj?.data.profile.lastName}</p>
                <span>LSQFf587g90</span>
              </div>
            </div>
            <div className="middle">
              <div>
                <span>User’s Tier</span>
                <div>
                  <img src="/img/dashboard/icons/star-solid.svg" />
                  <img src="/img/dashboard/icons/star-outline.svg" />
                  <img src="/img/dashboard/icons/star-outline.svg" />
                </div>

              </div>
            </div>
            <div className="right-side">
              <p>₦{fetchObj?.data.accountBalance}</p>
              <span>{fetchObj?.data.accountNumber}/Providus Bank</span>
            </div>
          </div>
        </Card>

        <div className="user-information">
          <div className="tabs-container">
            <NavTabs />
          </div>
          <Card>
            <div className="detail-section">
              <span className="section-title">Personal Information</span>
              <div className="section-details">
                <div className="detail">
                  <span className="detail-key">Full name</span>
                  <span className="detail-value">{fetchObj?.data.profile.firstName} {fetchObj?.data.profile.lastName}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">Phone number</span>
                  <span className="detail-value">{fetchObj?.data.profile.phoneNumber}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">Email address</span>
                  <span className="detail-value">{fetchObj?.data.email}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">bvn</span>
                  <span className="detail-value">{fetchObj?.data.profile.bvn}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">Gender</span>
                  <span className="detail-value">{fetchObj?.data.profile.gender}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">Marital status</span>
                  <span className="detail-value">Single</span>
                </div>
                <div className="detail">
                  <span className="detail-key">Children</span>
                  <span className="detail-value">None</span>
                </div>
                <div className="detail">
                  <span className="detail-key">type of residence</span>
                  <span className="detail-value">Parent’s Apartment</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <span className="section-title">Education and Employment</span>
              <div className="section-details">
                <div className="detail">
                  <span className="detail-key">level of education</span>
                  <span className="detail-value">{fetchObj?.data.education.level}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">employment status</span>
                  <span className="detail-value">{fetchObj?.data.education.employmentStatus}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">sector of employment</span>
                  <span className="detail-value">{fetchObj?.data.education.sector}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">Duration of employment</span>
                  <span className="detail-value">{fetchObj?.data.education.duration}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">office email</span>
                  <span className="detail-value">{fetchObj?.data.education.officeEmail}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">Monthly income</span>
                  <span className="detail-value">₦{fetchObj?.data.education.monthlyIncome[0]} - ₦{fetchObj?.data.education.monthlyIncome[0]}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">loan repayment</span>
                  <span className="detail-value">₦{fetchObj?.data.education.loanRepayment}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <span className="section-title">Socials</span>
              <div className="section-details">
                <div className="detail">
                  <span className="detail-key">twitter</span>
                  <span className="detail-value">{fetchObj?.data.socials.twitter}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">facebook</span>
                  <span className="detail-value">{fetchObj?.data.socials.facebook}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">instagram</span>
                  <span className="detail-value">{fetchObj?.data.socials.instagram}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <span className="section-title">Guarantor</span>
              <div className="section-details">
                <div className="detail">
                  <span className="detail-key">full name</span>
                  <span className="detail-value">{fetchObj?.data.guarantor.firstName} {fetchObj?.data.guarantor.lastName}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">phone number</span>
                  <span className="detail-value">{fetchObj?.data.guarantor.phoneNumber}</span>
                </div>
                <div className="detail">
                  <span className="detail-key">email address</span>
                  <span className="detail-value">debby@gmail.com</span>
                </div>
                <div className="detail">
                  <span className="detail-key">relationship</span>
                  <span className="detail-value">Sister</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )}
    </>
  );
};

export default UserDetails;
