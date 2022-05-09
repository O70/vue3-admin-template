const source = {
    options: {
        url: 'http://SOURCE_URL',
        headers: {
            "XXX-TOKEN": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiI5YVFkUmVkZFdGd1laVnp6UERkeEZBQnNwVHkzdnBVWDJzaU4rUDNld0p0c1pGbmMwQU5kKzl2Z3owZThPd3Y2WnNyK0RmVENNa0ZQXG5xZnlnVitsUGdhVk1mSHloMFNMajVtUEZtSTZOdzRJPSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNjUyMDQ2OTc3LCJpYXQiOnsieWVhciI6MjAyMiwibW9udGhWYWx1ZSI6NSwibW9udGgiOiJNQVkiLCJkYXlPZk1vbnRoIjo5LCJkYXlPZlllYXIiOjEyOSwiZGF5T2ZXZWVrIjoiTU9OREFZIiwiaG91ciI6MCwibWludXRlIjo1Niwic2Vjb25kIjoxNywibmFubyI6MTcwMDAwMDAsImNocm9ub2xvZ3kiOnsiY2FsZW5kYXJUeXBlIjoiaXNvODYwMSIsImlkIjoiSVNPIn19LCJqdGkiOiIxNTIxZTQ0NC01ODY5LTQyYzUtOTRjMC02NjNkZGNmMzAwODEifQ.mlmfOBOgCLKnNWSElcczLeMPAGA4auiobXZ4NAcYcD5AIrAfSj6E6-MZBfcYsXYwpH7rQ4-UmXYj3cb9FUqpdQ"
        }
    }
};

const target = {
    options: {
        baseURL: 'http://localhost:9717',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJraWQiOiJUSFJBRVgtS0VZIiwiYWxnIjoiUlMyNTYifQ.eyJqdGkiOiJvVHlYaWV4N24wdlB1d0x0RUdMRGhnIiwiaWF0IjoxNjUyMDk2ODg1LCJpc3MiOiJUSFJBRVgiLCJleHAiOjE2NTIxNDAwODUsIm5iZiI6MTY1MjA5Njc2NSwic3ViIjoiMTM2Nzc4ODkwOTEiLCJwcmluY2lwYWwiOiJ7XCJhdXRob3JpdGllc1wiOltcIlJPTEVfR0VORVJJQ1wiXSxcImlkXCI6XCJkZWExODI5ZC1jZjhkLTExZWMtOTlhNi0wMjQyYWMxMTAwMDJcIixcInBhc3N3b3JkXCI6XCJ7YmNyeXB0fSQyYSQxMCQ5MWVLNm8xd1JUcG1UWkM0b0VCeGtPbFxcL2R6VndUS2g0SjNaSkxMMEttdFlpT0QwbHdzOHpTXCIsXCJ1c2VybmFtZVwiOlwiMTM2Nzc4ODkwOTFcIn0ifQ.cXNPEsqhjmO3UvlVwQAjqKSK38oxJNO1qefSw9RS_9S_RgHd4KKEc3r7r7HqFFpo3L5ysEheIiugFxe2ZOyUdDhZC2_hM09vqwV6Og2h98t06E1wpi4diC2SGxoljzW-BMzpoX5eLWGYvPFj1inxKgG7F4B1-MIUMVI_R-xsjbx8tzZrGRDnH1aj282-xaNK1g1LcFUCNe0muojCsFpGl32ltDWvsJf40IC1lQabaWf6HYGHFhOA6GVx3iEYKh18MJMsY1-nzOHW8e7Dg4xmFHrNUAEzd5UOYEHD1Mc9Fz2vJhOfffK8hJFYYmP7h7Jie431QdG3HbF0sdhLgGmLtg'
        },
        timeout: 10 * 1000
    }
};

module.exports = { source, target };