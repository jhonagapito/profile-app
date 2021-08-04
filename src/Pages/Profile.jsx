import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile] = useState({
    fullname: "Jhon Esmael C. Agapito",
    firstName: "Jhon Esmael",
    lastName: "Agapito",
    email: "jhon.agapito@gmail.com",
    gender: "Male",
    birthDate: "May 10, 1991",
    phone: "+639054062348",
    websiteUrl: "https://github.com/jhonagapito",
    address: {
      street: "B9 L7 Sweden St. Grand Monaco La Potenza",
      city: "Pasig",
      state: "Metro Manila",
      zipcode: "1600",
      country: "Philippines",
    },
  });

  return (
    <div className="container">
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                      src="https://avatars.githubusercontent.com/u/28601449?v=4"
                      alt="Maxwell Admin"
                    />
                  </div>
                  <h5 className="user-name">Jhon Agapito</h5>
                  <h6 className="user-email">jhon.agapito@gmail.com</h6>
                </div>
                <div className="about">
                  <h5>About</h5>
                  <p>
                    I'm Jhon. Front-end Engineer that specializes in ReactJS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter first name"
                      readOnly
                      value={profile.firstName}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter last name"
                      readOnly
                      value={profile.lastName}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      placeholder="Enter full name"
                      readOnly
                      value={profile.gender}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="birthDate">Birth Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="birthDate"
                      placeholder="Enter Birth Date"
                      readOnly
                      value={profile.birthDate}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter email ID"
                      readOnly
                      value={profile.email}
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="website">Website URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="website"
                      placeholder="Website url"
                      readOnly
                      value={profile.websiteUrl}
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mt-3 mb-2 text-primary">Address</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Street">Street</label>
                    <input
                      type="name"
                      className="form-control"
                      id="Street"
                      placeholder="Enter Street"
                      readOnly
                      value={profile.address.street}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="ciTy">City</label>
                    <input
                      type="name"
                      className="form-control"
                      id="ciTy"
                      placeholder="Enter City"
                      readOnly
                      value={profile.address.city}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="sTate">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sTate"
                      placeholder="Enter State"
                      readOnly
                      value={profile.address.state}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Zip Code"
                      readOnly
                      value={profile.address.country}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
