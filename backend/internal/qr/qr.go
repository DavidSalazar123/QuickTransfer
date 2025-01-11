package qr

import (
	"image"
	"log"

	"github.com/skip2/go-qrcode"

	logger "QuickTransfer/logger"
)

// RenderString as a QR code
func RenderString(s string, inverseColor bool) {
	q, err := qrcode.New(s, qrcode.Medium)
	if err != nil {
		log.Fatal(err)
	}
	logger.Info(q.ToSmallString(inverseColor))
}

// RenderImage returns a QR code as an image.Image
func RenderImage(s string) image.Image {
	q, err := qrcode.New(s, qrcode.Medium)
	if err != nil {
		log.Fatal(err)
	}
	return q.Image(256)
}
