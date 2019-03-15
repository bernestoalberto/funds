
var ExerciseC6D = artifacts.require("ExerciseC6D");

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x7311bD9C8E5A3D46f3d36D8e99820682335FB949",
        "0xaDDc2954A1759bD8207Ba7d3E69EcF0dAa1539ff",
        "0xDc196587B59A8accbAb502a642CE96AE71E017E1",
        "0xFA937F92F8a106DCac3f3d2d8930e07e540a596d",
        "0xbf5F1efcD38b90231d1Bc6694f7Eb54135c989F3",
        "0xD69BA0709D161543FA19Fa67c2e3ee95da33FB72",
        "0x4ae0F84a7aD98E6cd3D8c11a7f4e5D9398D364e8",
        "0xA0484F82C2b4AA9AD9d5ef2BF8fdCaD63EA0DDfb",
        "0xffD3b6fEBBd109a57ba1EEa998F3bdd84d81cD77",
        "0x26e68A87dc4040Fdec8aA62f1f8C5c7B2706EEC9"
    ];


    let owner = accounts[0];
    let exerciseC6D = await ExerciseC6D.new();
    
    return {
        owner: owner,
        testAddresses: testAddresses,
        exerciseC6D: exerciseC6D
    }
}

module.exports = {
    Config: Config
};