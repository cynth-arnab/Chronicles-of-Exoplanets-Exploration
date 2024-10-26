MODEL_NAME="stabilityai/stable-diffusion-xl-base-1.0"
DATASET_NAME="sshh12/planet-textures"

!accelerate launch v2/train_text_to_image_lora_sdxl.py \
  --pretrained_model_name_or_path="$MODEL_NAME" \
  --pretrained_vae_model_name_or_path="madebyollin/sdxl-vae-fp16-fix" \
  --dataset_name="$DATASET_NAME" \
  --caption_column="text" \
  --width=1024 \
  --height=512 \
  --random_hflip \
  --random_vflip \
  --mixed_precision="fp16" \
  --use_8bit_adam \
  --train_batch_size=1 \
  --gradient_accumulation_steps=2 \
  --num_train_epochs=500 \
  --checkpointing_steps=100 \
  --learning_rate=1e-05 \
  --lr_scheduler="constant" \
  --lr_warmup_steps=0 \
  --seed=0 \
  --validation_epochs=5 \
  --validation_prompt_file="v2/validation_prompts.txt" \
  --enable_xformers_memory_efficient_attention \
  --report_to="wandb"