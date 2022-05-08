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
        baseURL: 'http://TARGET_URL',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJraWQiOiJUSFJBRVgtS0VZIiwiYWxnIjoiUlMyNTYifQ.eyJqdGkiOiJLTlFyRTNvNkhZMlBmOE9wZEZoeXp3IiwiaWF0IjoxNjUyMDQ4MjY5LCJpc3MiOiJUSFJBRVgiLCJleHAiOjE2NTIwOTE0NjksIm5iZiI6MTY1MjA0ODE0OSwic3ViIjoiMTM2Nzc4ODkwOTEiLCJwcmluY2lwYWwiOiJ7XCJhdXRob3JpdGllc1wiOltcIlJPTEVfR0VORVJJQ1wiXSxcImlkXCI6XCJhZTcxNWI0Ni1jZjFjLTExZWMtOTlhNi0wMjQyYWMxMTAwMDJcIixcInBhc3N3b3JkXCI6XCJ7YmNyeXB0fSQyYSQxMCQ5MWVLNm8xd1JUcG1UWkM0b0VCeGtPbFxcL2R6VndUS2g0SjNaSkxMMEttdFlpT0QwbHdzOHpTXCIsXCJ1c2VybmFtZVwiOlwiMTM2Nzc4ODkwOTFcIn0ifQ.cbhRgcnbpHThUizKyYemj1Imbkb_4nLm6LpSsunPQjrlPzVDHuy3pW947cuJa6XxecRWNqQXpNXM94ZV1TmVhsCZvW2nmDLPzdgi593nLrGTN9fJuHWkhszOY3P82Fxjx0jvPOBR3BjN2oyBkCY9z_EaGSodCMfssfy9hPrOvcg9LWL6bXrsiXHEojWDKQI3K1LYGTMYF49DJ1K5VL8iXzyudiO9kpKVA6ujkAmSu2nVTYgB3YjR6LePMFSHXxGNV9XJV7yE3I3w7YjVzbBHI9OY5cc35I5TOXzfrAPSstPUJ8mXUikTmVWcTRfSY8i_oiHj6jjLyHw1zrXVrkWZ-A'
        }
    }
};

module.exports = { source, target };