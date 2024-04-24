// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

// import "@openzeppelin/contracts/ownership/Ownable.sol";

contract Secret {
    struct Secret {
        string domain;
        string secret;
    }

    mapping(address => Secret[]) private s_secrets;

    event SecretStored(address indexed owner, string indexed domain); // Event for store success
    event SecretUpdated(address indexed owner, string indexed domain); // Event for update success
    event SecretDeleted(address indexed owner, string indexed domain); // Event for delete success
    event SecretShared(
        address indexed owner,
        address indexed recipient,
        string indexed domain
    ); // Event for sharing success

    function setSecret(
        string calldata _domain,
        string calldata _secret
    ) external {
        // console.log("Hit setSecret: %s%s", _domain, _secret);

        // Find if service already exists
        bool serviceFound = false;
        for (uint256 i = 0; i < s_secrets[msg.sender].length; i++) {
            if (
                keccak256(abi.encodePacked(s_secrets[msg.sender][i].domain)) ==
                keccak256(abi.encodePacked(_domain))
            ) {
                // Update the secret
                s_secrets[msg.sender][i].secret = _secret;
                serviceFound = true;
                emit SecretUpdated(msg.sender, _domain);
                break;
            }
        }

        // If not found, add as a new secret
        if (!serviceFound) {
            s_secrets[msg.sender].push(Secret(_domain, _secret));
            emit SecretStored(msg.sender, _domain);
        }
    }

    function deleteSecret(string calldata _domain) external {
        // Find the index of the secret to delete
        uint256 indexToDelete = findSecretIndex(_domain);

        // Ensure the secret exists
        require(
            indexToDelete != s_secrets[msg.sender].length,
            "Secret not found"
        );

        // Delete the secret (this does not preserve array order)
        s_secrets[msg.sender][indexToDelete] = s_secrets[msg.sender][
            s_secrets[msg.sender].length - 1
        ];
        s_secrets[msg.sender].pop();

        emit SecretDeleted(msg.sender, _domain);
    }

    function findSecretIndex(
        string calldata _domain
    ) private view returns (uint256) {
        for (uint256 i = 0; i < s_secrets[msg.sender].length; i++) {
            if (
                keccak256(abi.encodePacked(s_secrets[msg.sender][i].domain)) ==
                keccak256(abi.encodePacked(_domain))
            ) {
                return i;
            }
        }
        return s_secrets[msg.sender].length; // Indicates 'not found' condition
    }

    function getSecrets() public view returns (Secret[] memory) {
        // console.log("Hit getSecrets: %s", s_secrets[msg.sender]);
        return s_secrets[msg.sender];
    }

    function shareSecret(address _recipient, string calldata _domain) external {
        // 1. Find the secret to share
        uint256 secretIndex = findSecretIndex(_domain);
        require(
            secretIndex != s_secrets[msg.sender].length,
            "Secret not found"
        );

        // 2. Retrieve the secret
        Secret memory secretToShare = s_secrets[msg.sender][secretIndex];

        // 3. Add the secret to the recipient's storage
        s_secrets[_recipient].push(secretToShare);

        // Optional: Emit an event for tracking (similar to your other events)
        emit SecretShared(msg.sender, _recipient, _domain);
    }
}