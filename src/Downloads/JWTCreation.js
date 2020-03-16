import React from 'react'
import { v1 } from 'appstoreconnect'

export default function JWTCreation() {
    const privateKey = `MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgJN9Tnr6aaNwjwdyj
    H5tUDJ23Lznw/O/W4trwM03Jd3egCgYIKoZIzj0DAQehRANCAAQ1CZDOZF/G76VE
    5c3fcyvXmjyqIB5rwKcjBIm+gDzTzhZ3XVfC3KRx51vGBh1zsnPBy6HdTTIVupbW
    ZyUen3Ip` // replace with the contents of your private key
    const issuerId = '69a6de76-9d50-47e3-e053-5b8c7c11a4d1' // replace with your issuer ID
    const keyId = 'GAX6H2D7XH' // replace with your key ID

    const token = v1.token(privateKey, issuerId, keyId)
    
    return (
        <div>
            <p>{token}</p>
        </div>
    )
}
