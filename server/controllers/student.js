/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import bcrypt from 'bcrypt';
import ms from 'ms';
import { authService, validate } from '../services/index';
import { student, user } from '../helpers/index';
import { errorLog } from '../utils/logger.js';

// eslint-disable-next-line consistent-return
export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'All fields are required',
      status: 400,
    });
  }

  // TODO: check if user exist in database
  user
    .findUser(email)
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(401).json({
          message: 'Invalid username or password',
          status: 401,
        });
      }

      // TODO: check if user password is valid
      bcrypt
        .compare(password, foundUser.password)
        .then((auth) => {
          if (!auth) {
            return res.status(401).json({
              message: 'Invalid username or password',
              status: 401,
            });
          }

          // TODO: find student by id
          student
            .findById(foundUser._id)
            .then((foundStudent) => {
              if (!foundStudent) {
                errorLog.error(`FindStudentById: ${foundStudent}`);
                return res.status(500).json({
                  message: 'An error has occurred login. PLease try again.',
                  status: 500,
                });
              }
              // TODO: generate token and cookie
              const cookieToken = authService.generateToken(
                foundUser._id,
                foundUser.email,
                foundUser.isAdmin,
              );
              res.cookie('cookie', cookieToken, {
                httpOnly: true,
                secure: true,
                maxAge: ms('3d'),
              });
              // eslint-disable-next-line no-shadow
              const { password, __v, ...userOthers } = foundUser._doc;
              const { _id, ...studentOthers } = foundStudent._doc;
              const studentData = {
                ...userOthers,
                ...studentOthers,
              };
              return res.status(200).json({
                message: studentData,
                status: 200,
              });
            })
            .catch((FindStudentError) => {
              errorLog.error(`FindStudent: ${FindStudentError}`);
              return res.status(500).json({
                message: 'An error has occurred login. PLease try again.',
                status: 500,
              });
            });
        })
        .catch((BcryptCompareError) => {
          errorLog.error(`BcryptCompare Student: ${BcryptCompareError}`);
          return res.status(500).json({
            message: 'An error has occurred login. PLease try again.',
            status: 500,
          });
        });
    })
    .catch((FindUserError) => {
      errorLog.error(`FindUser: ${FindUserError}`);
      return res.status(500).json({
        message: 'An error has occurred login. PLease try again.',
        status: 500,
      });
    });
};

// eslint-disable-next-line consistent-return
export const register = (req, res) => {
  const {
    email,
    firstName,
    lastName,
    educationLevel,
    preferredLanguage,
    password,
    confirmPassword,
  } = req.body;

  if (
    !email
    || !firstName
    || !lastName
    || !educationLevel
    || !preferredLanguage
    || !password
    || !confirmPassword
  ) {
    return res.status(400).json({
      message: 'All fields are required.',
      status: 400,
    });
  }

  // TODO: validate user email
  validate
    .isEmail(email)
    .then((validEmail) => {
      // TODO: validate user passwords
      validate
        .isPassword(password, confirmPassword)
        .then((validPassword) => {
          // hash user password
          bcrypt
            .hash(validPassword, 15)
            .then((hashedPassword) => {
              // TODO: save user
              user
                .saveUser(validEmail, hashedPassword, false)
                .then((savedUser) => {
                  // TODO: save student
                  student
                    .saveStudent(
                      savedUser._id,
                      firstName,
                      lastName,
                      educationLevel,
                      preferredLanguage,
                    )
                    .then((savedStudent) => {
                      // TODO: generate token and cookie
                      const cookieToken = authService.generateToken(
                        savedUser._id,
                        savedUser.email,
                        savedUser.isAdmin,
                      );
                      res.cookie('cookie', cookieToken, {
                        httpOnly: true,
                        secure: true,
                        maxAge: ms('3d'),
                      });
                      // eslint-disable-next-line no-shadow
                      const { __v, password, ...userOthers } = savedUser._doc;
                      const { _id, ...studentOthers } = savedStudent._doc;

                      const studentData = {
                        ...userOthers,
                        ...studentOthers,
                      };

                      return res.status(201).json({
                        message: studentData,
                        status: 201,
                      });
                    })
                    .catch((SaveStudentError) => {
                      errorLog.error(` SaveStudentError: ${SaveStudentError}`);
                      res.status(500).json({
                        message: SaveStudentError,
                        status: 500,
                      });
                    });
                })
                .catch((SaveUserError) => {
                  errorLog.error(`SaveUserError Student: ${SaveUserError}`);
                  res.status(500).json({
                    message: 'Failed to create account, please try again.',
                    status: 500,
                  });
                });
            })
            .catch((BcryptHashError) => {
              errorLog.error(`BcryptHashError Student: ${BcryptHashError}`);
              res.status(500).json({
                message: 'Failed to register. Try again.',
                status: 500,
              });
            });
        })
        .catch((ValidatePasswordError) => res.status(500).json({
          message: ValidatePasswordError,
          status: 500,
        }));
    })
    .catch((ValidateEmailError) => res.status(500).json({
      message: ValidateEmailError,
      status: 500,
    }));
};
