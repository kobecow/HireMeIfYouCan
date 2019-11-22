provider "aws" {
    profile = "default"
    region = "ca-central-1"
}

resource "aws_instance" "example" {
    ami = "ami-007dbcbce3118978b"
    instance_type = "t3.micro"
}