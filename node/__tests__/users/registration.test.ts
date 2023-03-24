describe('Users registration', () => {
  describe('registration data is wrong', () => {
    describe('[email] is wrong', () => {
      xit('throw error when [email] is null', () => {})
      xit("throw error when [email] doesn't have a valid format", () => {})
      xit('throw error when [email] already exists, it must be unique', () => {})
      xit('throw error when [email] is not long enough', () => {})
    })

    describe('[NIT] is wrong', () => {
      xit('throw error when [NIT] is null', () => {})
      xit('throw error when [NIT] has non-alphanumeric characters', () => {})
      xit('throw error when [NIT] already exists, it must be unique', () => {})
      xit('throw error when [NIT] is not long enough', () => {})
    })

    describe('[password] is wrong', () => {
      xit('throw error when [passwor] is null', () => {})
      xit("throw error when [password] doesn't have at less 3 numbers", () => {})
      xit("throw error when [password] doesn't have at less 3 capital letters", () => {})
      xit("throw error when [password] doesn't have at less 2 non-alphanumeric characters", () => {})
      xit('throw error when [password] is not long enough, it must have at less 12 characters', () => {})
    })

    describe('[companyName] is wrong, but other inputs are valid', () => {
      xit('throw error when [companyName] is null', () => {})
      xit("throw error when [companyName] has non-alphanumeric characters, exept for the 'space' character", () => {})
      xit('throw error when [companyName] is not long enough, it must have at less 8 characters', () => {})
    })
  })

  describe('registration data is valid, but registration process fails', () => {
    xit('returns an internal server error', () => {})
  })

  describe('registion data is valid and process is successful', () => {
    xit('returns a sucess message', () => {})
  })
})
